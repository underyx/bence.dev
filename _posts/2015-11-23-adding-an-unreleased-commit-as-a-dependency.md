---
title: Adding an Unreleased Commit as a Dependency for Your Python Package
---

I'm not ashamed to admit it: I'm in love with Python. Even though it has this one really quirky bit that keeps annoying me -- its packaging tools. Granted, [it's been improving a lot in the recent years](http://pypaio.readthedocs.org/en/latest/history/), and there's a [ton of work in progress by the fine people at PyPA](http://pypaio.readthedocs.org/en/latest/roadmap/), but there's still just so many cases where it's inconsistent, or even just straight up silly (especially when you need to depend on private packages, and still want to be able to install your package with a simple `pip install`).

## Dual Origins

Ideally, installing a specific commit of a package would be a simple matter, but with Python, not only do we need a guide for it, we actually need two. This is the case because there are two ways to define dependencies in Python, both of them working in sort of similar ways, as described in [this nice little blog post](https://caremad.io/2013/07/setup-vs-requirement/), but just differently enough to be utterly confusing to newcomers. A quick summmary would be that setup.py's `install_requires` lists the names and the needed versions of dependencies, but it doesn't really care how they're fulfilled, while a requirements.txt file has an implicit `--index-url=https://pypi.python.org/simple/` before the first line, so each dependency has a URI that defines its exact location, and by extension, each of its lines of code (when the version is pinned, as it should be). To illustrate this, when a requirements.txt file says

    Flask==0.10.1
    redis==2.10.5

what that really means is

 1. Download `https://pypi.python.org/packages/source/F/Flask/Flask-0.10.1.tar.gz` and install it
 2. Download `https://pypi.python.org/packages/source/r/redis/redis-2.10.5.tar.gz` and install it

but a setup.py dependency list of

    [
        'Flask==0.10.1',
        'redis==2.10.5',
    ]

would only mean

 1. Check if we have something installed that calls itself `Flask 0.10.1`. If not, download it from somewhere and install it.
 2. Check if we have something installed that calls itself `redis 2.10.5`. If not, download it from somewhere and install it.

and it just so happens that this (most of the time) will also find the above URLs first as download links.

## And Now the Stuff You Came Here to Read (Why Do I Keep Doing This?)

*Note: I've tested my solution on Python 2.7.11 and Python 3.5.0, with pip 7.1.2 and setuptools 18.3.2 installed. If you have an older version, this guide still might apply, but hey, why not take this moment to run `pip install --upgrade pip setuptools wheel`?*

So you've made some modifications to a library and you want to use that version instead of one of the latest releases on PyPI. Or maybe you just want to use a version that has been committed to the official repo, but hasn't made it's way into a release yet. Well, here's what you should do...

### ...in your setup.py:

 1. Find a link to an archive of the source code that you'd like to use. On GitHub, you'll see a handy 'Download ZIP' button for this when browsing the files of a repository. Make sure that you use a link that contains a commit SHA, instead of something like `master.zip`, so that it will always point to the same archive. Using `master.zip` would mean that every time you install your dependencies, the installed code could be different from when you last installed it -- which is the perfect recipe for constantly breaking your code in mysterious ways. If you're on GitHub, you can just [press the `y` key at any time to have everything pinned to the commit you're looking at](https://help.github.com/articles/getting-permanent-links-to-files/), including that 'Download ZIP' button.
 2. When you have the link, such as https://github.com/mitsuhiko/flask/archive/bd4020d9de90eff06ea5febba987d2564eed0ccb.zip for this commit https://github.com/mitsuhiko/flask/tree/bd4020d9de90eff06ea5febba987d2564eed0ccb, you need to add it as a source for a new version of your library -- a new version that you're just about to make up yourself. Specifying this requires the use of a pretty weird format: you need to add it as an item of the `dependency_links` keyword argument's list in your `setup()` call, as a string that looks like this: `'{url}#egg={package_name}-{version}'`. The version can be anything, but I suggest that you use the version number from the setup.py in the downloaded archive, and append `'+git.{short_commit_hash}'` at the end, so in our case that would be `0.11+git.bd4020d` for the version, or for the entire line: `dependency_links=['https://github.com/mitsuhiko/flask/archive/bd4020d9de90eff06ea5febba987d2564eed0ccb.zip#egg=Flask-0.11+git.bd4020d']`.
 3. This way if setuptools gets the instruction 'Check if we have something installed that calls itself `Flask 0.11+git.bd4020d`. If not, download it from somewhere and install it.', it will now know where to look -- instead of downloading from PyPI (where it wouldn't find this version anyway), it will know that it can download it from the URL you just gave! So, we just need to give it that instruction. Do this the way you would expect to: `install_requires=['Flask==0.11+git.bd4020d']`.
 4. Fine, I lied a little up there, it wouldn't actually know where to look, yet. If you use pip for installation, what you specified in step 2 will be entirely ignored, unless you use the `--process-dependency-links` flag with it. So run `pip install --process-dependency-links .`. And you're done! (Note that `python setup.py install` and `python setup.py develop` won't work. I have no idea how to fix those. Thankfully, you can just use pip instead and get the same result, with the above command, or the `pip install -e` equivalent, respectively.)

### ...in your requirements.txt:

 1. This one is a bit easier: you can just copy that dependency_links item from setup.py, and paste it here, prefixing it with `--find-links `. For our example, that would be `--find-links https://github.com/mitsuhiko/flask/archive/bd4020d9de90eff06ea5febba987d2564eed0ccb.zip#egg=Flask-0.11+git.bd4020d`. Make sure that you have no other lines specifying this package as a dependency, though!
 2. Below that, add the same requirement as in setup.py: `Flask==0.11+git.bd4020d`
 3. You don't even need to use a fancy flag for this, just run `pip install -r requirements.txt` as usual!

## Oh, What a Journey!

There you have it. You finally managed to specify that dependency correctly. Now rinse and repeat if you have more, or if you have dependencies-of-dependencies that need to be replaced as well. This is not an uncommon occurrence, since the dependencies listed in a project's setup.py are typically not constantly updated to point to the correct commits of other packages. One such example is [Celery](http://www.celeryproject.org/). In Celery's case, you would need to make sure to also define the correct archives (typically the latest commit on each of their master branches) for [amqp](https://github.com/celery/py-amqp), [billiard](https://github.com/celery/billiard), and [kombu](https://github.com/celery/kombu).
