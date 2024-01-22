---
title: Setting Up a Full Screen Dashboard with Chrome on Windows
publishDate: 2017-06-25
revisionDate: 2019-03-02
---

Here's a super simple guide,
mostly for my own reference.
It should help set up a dashboard viewable at a public URL,
on a PC that can reboot at random times
(for instance due to Windows updates.)

As Chrome seems to be changing up the command line options sometimes,
I'll add that these intructions were last tested on March 2nd, 2019.

What you need to do is

1. Create a shortcut for Chrome.
2. Edit the launch command of Chrome in the Properties window of the shortcut. Append these command line flags (after the closing quote): `--start-fullscreen --disable-session-crashed-bubble --app=<url>`

   - `--start-fullscreen` makes Chrome launch in full screen mode.
   - `--disable-session-crashed-bubble` disables the "Chrome didn't shut down properly" alert after the PC reboots
   - `--app=<url>` sets the default URL to open.

3. Rename the shortcut from "Google Chrome" to the name of your dashboard page,
   just to keep things clean
4. Move this shortcut to `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`
   to make Windows launch it automatically upon startup.
   The `Startup` directory doesn't exist by default, so you might need to create it.
5. Reboot and see if it works!

That should be it!
One last tiny tip:
if you're setting up dashboards with Datadog, like I am,
you can add `?tv_mode=true` at the end of the URL
and Datadog will automatically scale the page to fill the screen. Neat!
