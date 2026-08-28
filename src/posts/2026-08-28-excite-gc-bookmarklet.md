---
title: "How to Make GC Battles Exciting Again"
description: "A handy bookmarklet for in your browser!"
date: 2026-08-28
image: /images/excite-gc-after.png.png
alt: "Screenshot of the top10 in GC after Stage 6 of La Vuelta 2026 with the bookmarklet applied."
tags: ["Nerdy Computer Stuff", "Cycling"]
---
Inspired by a [post from Anna Mac](https://bsky.app/profile/annamacb.bsky.social/post/3mtyqwdhbgk2o), I hacked together a little bookmarklet.

Drag the button below to the bookmark bar of your favorite browser.

{% capture jsCode %}{% include "excite-gc-bookmarklet.js" %}{% endcapture %}
<a class="bookmarklet-button" href="{{ jsCode | strip_newlines | escape }}">Excite GC!</a>

Then go visit [ProcyclingStats](https://www.procyclingstats.com), check the GC results of any race, smash the Excite GC! button, and it will turn this:

![Screenshot of the top10 in GC after Stage 6 of La Vuelta 2026.](/images/excite-gc-before.png)

into this:

![Screenshot of the top10 in GC after Stage 6 of La Vuelta 2026 with the bookmarklet applied.](/images/excite-gc-after.png)

Enjoy!