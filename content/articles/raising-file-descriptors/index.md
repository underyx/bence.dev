---
title: Raising the Maximum Number of File Descriptors (Open Files) on Ubuntu 14.04 Trusty
slug: raising-the-maximum-number-of-file-descriptors
publish_date: 2015-05-18
revision_date: 2015-05-18
---

So, I think I reached a new milestone in my sysadmin career (I mainly identify
as a developer, but am responsible for the infrastructure at
[Allmyles](https://allmyles.com) as well, currently.) The milestone I'm talking
about is when you're first hit with a downtime completely out of the blue,
seeing some weird 'Reached maximum number of open files' error, or something
similar.

Chances are, if you now need to research how to raise the limit, you didn't even
know before that such a limit existed, or like me, you had some vague idea, but
never gave it much thought ('We don't need to deal with this right now, surely
we will revisit the issue before we even get close to the current limit.') Well,
no. You won't. And when your services go down, it's going to be hell to find any
worthwhile resource that describes how to solve this thing, so you better do
this now, or at the very least, set up some monitoring for the number of used
file descriptors for critical processes!

If anyone's interested, as I understand it, this entire feature is mostly
obsolete --- it seems like a nice safeguard against a certain type of memory
leak (namely, accidentally opening too many files which each take up a bit of
year memory), or for controlling resources available for each user, but it seems
like it has practically no use nowadays, when file opens have practically no
cost at all on most systems.

For reference, our current stack, for which the steps described below worked is:

- Instances hosted on [Amazon EC2](https://aws.amazon.com/ec2/) (not that this
  one should matter)
- Ubuntu 14.04 (Trusty) for the OS
- [Supervisor](http://supervisord.org) for process management
- And lastly, the process hitting errors was
  [Elasticsearch](https://www.elastic.co/products/elasticsearch)

## Realizing You Have A Problem is the First Step

If you're currently trying to fix the issue on a live server, just skip on down
to the next section. Otherwise, it's probably a nice idea to check what your
limit is set to, and how close you are to reaching it.

The canonical way to check the limits for your current session which everyone
will tell you is the [`ulimit`](http://ss64.com/bash/ulimit.html) command:

    $ ulimit -n
    4096
    $ ulimit -Hn
    4096
    $ ulimit -Sn
    4096

A couple things to note:

- There are separate limits for different users, so make sure to run this as
  the user your process is using.
- There's a hard limit, and a soft limit. The latter is the actual limit your
  processes have to obey, and the former set the maximum number the soft limit
  can be set to. If you need to set separate values for these two, you probably
  already know how to do that and are not reading this post, so just keep in
  mind to always modify both, and check the soft limit.

So this is what you would find after 10 seconds of Googling, but keep in mind
that _ulimit is not guaranteed to give you the limits your processes actually
have!_ There's a million things that can modify a limits of a process after (or
before) you initialized your shell. So what you should do instead is fire up
`top`, [`htop`](http://hisham.hm/htop/), `ps`, or whatever you want to use to
get the ID of the problematic process, and do a `cat /proc/{process_id}/limits`:

    $ cat /proc/1882/limits
    Limit                     Soft Limit           Hard Limit           Units
    Max cpu time              unlimited            unlimited            seconds
    Max file size             unlimited            unlimited            bytes
    Max data size             unlimited            unlimited            bytes
    Max stack size            8388608              unlimited            bytes
    Max core file size        0                    unlimited            bytes
    Max resident set          unlimited            unlimited            bytes
    Max processes             15922                15922                processes
    Max open files            4096                 4096                 files
    Max locked memory         65536                65536                bytes
    Max address space         unlimited            unlimited            bytes
    Max file locks            unlimited            unlimited            locks
    Max pending signals       15922                15922                signals
    Max msgqueue size         819200               819200               bytes
    Max nice priority         0                    0
    Max realtime priority     0                    0
    Max realtime timeout      unlimited            unlimited            us

_Eek!_ Our Elasticsearch process has a max file limit of 4096, which is way less
than we intended! Lucky for us `/proc/{process_id}/fd` is a directory that
holds a file for each open file the process has, so it's pretty easy to count
how close we are to reach the limit:

    $ sudo ls /proc/1882/fd | wc -l
    4096

Welp, at least that explains why we're seeing all those errors in the log. For
the record, it took us 79 Elasticsearch indices to hit the 4096 open file limit.
Oh well, let's move on to actually fixing this.

## The Stuff You Came Here to Read: Raising the Limit

Sorry it took this long to get here! The `ulimit -n 64000` command that's
floating around, as every easy 'solution', will not actually fix your problem.
The issue is that the command only raises your limit for the active shell
session, so it's not permanent, and it most definitely will not affect your
processes that are already running (actually, nothing will, so don't have high
expectations here.)

The actual way to raise your descriptors consists of editing three files:

- `/etc/security/limits.conf` needs to have these lines in it:

        *    soft nofile 64000
        *    hard nofile 64000
        root soft nofile 64000
        root hard nofile 64000

  The asterisk at the beginning of the first two lines means 'apply this rule to
  all users except root', and you can probably guess that the last two lines set
  the limit only for the root user. The number at the end is of course, the new
  limit you're setting. 64000 is a pretty safe number to use

- `/etc/pam.d/common-session` needs to have this line in it:

        session required pam_limits.so

- `/etc/pam.d/common-session-noninteractive` also needs to have this line in it:

        session required pam_limits.so

  I never got around to looking into what exactly this does, but I'd assume that
  these two files control whether the limits file you edited above is actually
  read at the beginning of your sessions.

So, you did it, great job! Just reboot the machine (yup, sadly, you need to) and
your limits should reflect your changes:

    $ ulimit -n
    64000
    $ ulimit -Hn
    64000
    $ ulimit -Sn
    64000

Whee! And to check your problematic process again:

    $ cat /proc/1860/limits
    Limit                     Soft Limit           Hard Limit           Units
    Max cpu time              unlimited            unlimited            seconds
    Max file size             unlimited            unlimited            bytes
    Max data size             unlimited            unlimited            bytes
    Max stack size            8388608              unlimited            bytes
    Max core file size        0                    unlimited            bytes
    Max resident set          unlimited            unlimited            bytes
    Max processes             15922                15922                processes
    Max open files            4096                 4096                 files
    Max locked memory         65536                65536                bytes
    Max address space         unlimited            unlimited            bytes
    Max file locks            unlimited            unlimited            locks
    Max pending signals       15922                15922                signals
    Max msgqueue size         819200               819200               bytes
    Max nice priority         0                    0
    Max realtime priority     0                    0
    Max realtime timeout      unlimited            unlimited            us

Wait, _what?_ That still says 4096! There must be something we missed (except if
you're seeing 64000--in which case you can pat yourself on the back and close
this tab.)

## Finding That One Last Thing You Still Need to Do

So you stitched together and followed all the steps that you found on three
different blogs, and four Stack Overflow questions, and it still won't work.
_Huh?_

The thing that most resources neglect to emphasize, is that your limits can
really easily be modified by anything responsible for execution of your
processes. If `ulimit -n` (run as the correct user) is giving you the number you
just set, but `cat /proc/{process_id}/limits` is still printing the low number,
you almost certainly have a process manager, an init script, or something
similar messing your limits up. You also need to keep in mind that processes
inherit the limits of the parent process. This last step (if necessary) is going
to vary a lot based on your stack and configuration, so the best I can do is
give you an example, of how our Supervisor setup had to be configured to fix the
number of file descriptors.

[Supervisor has a config variable](http://supervisord.org/configuration.html#supervisord-section-values)
that sets the file descriptor limit of its main process. Apparently, this
setting is in turn inherited by any and all processes it launches. What's even
worse is that the default for this setting is 4096, and that's no good when
we're wanting 64000 instead. To override this default, you can add the following
line to `/etc/supervisor/supervisord.conf`, in the `[supervisord]` section:

    minfds=64000

Pretty easy to fix, but also really hard to find if you have no knowledge of
this inheritance rule, or the fact that Supervisor by default is not having any
of that OS level limit configuration. At this point, all you have to do is
restart `supervisord`, in my case with `sudo service supervisor restart`. This
should automatically restart your problematic processes as well, with your newly
set limit:

    $ cat /proc/1954/limits
    Limit                     Soft Limit           Hard Limit           Units
    Max cpu time              unlimited            unlimited            seconds
    Max file size             unlimited            unlimited            bytes
    Max data size             unlimited            unlimited            bytes
    Max stack size            8388608              unlimited            bytes
    Max core file size        0                    unlimited            bytes
    Max resident set          unlimited            unlimited            bytes
    Max processes             15922                15922                processes
    Max open files            64000                64000                files
    Max locked memory         65536                65536                bytes
    Max address space         unlimited            unlimited            bytes
    Max file locks            unlimited            unlimited            locks
    Max pending signals       15922                15922                signals
    Max msgqueue size         819200               819200               bytes
    Max nice priority         0                    0
    Max realtime priority     0                    0
    Max realtime timeout      unlimited            unlimited            us

Neat! You got that thing fixed. Now go celebrate by setting this up on your
other servers, too. And while you're at it, you can tack on some monitoring as
well.
