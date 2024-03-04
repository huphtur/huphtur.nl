---
title: "Introducing Single-Serving Sites"
description: "I made a Single-Serving Site for SIngle-Serving Sites!"
image: /images/singleservingsites.png
date: 2024-02-12
---
After I [launched](/how-many-days-until-omloop/) How Many Days Until Omloop, I wondered if there was a site that would list all single-serving sites. Did some searching and I came to the conclusion that there are no actively maintained sites for this. 

Introducing: [Single-Serving Sites](https://singleservingsites.cool/). My effort to try to list all the cool single-serving sites still online. 

[![Safari desktop browser displaying the Single-Serving Sites page.](/images/singleservingsites.png)](https://singleservingsites.cool/)

## What Makes a Single-Serving Site So Cool?
Of course the cultural impact of some of these sites is important. To me the fact that a person had an idea, registered a URL, and found some hosting just to put up a page on the internet is awesome. And then the best part: every single time when the domain is about to expire they will have to answer the question: _"Should I keep the site or not?"_

Sadly I failed to answer that question once. If you [read the post](https://kottke.org/08/02/single-serving-sites) where Jason Kottke coined the _Single-serving Site_  term, you see I contributed a site that I built and is now gone. Maybe I should resurrect it... 

My absolute favorite site: [Is Milan–San Remo Exciting Yet?](https://ismilansanremoexcitingyet.com/) It's for the [longest and most boring bike race](https://en.wikipedia.org/wiki/Milan%E2%80%93San_Remo) of the season, and when the race gets to the final climbs it's the most exciting finish ever. So every year the site's owner is watching the race, and when the race gets to the final ~30 minutes they change the site to __YES__. Would love to find out who is behind this site.

Back to [Single-Serving Sites](https://singleservingsites.cool/), the date shown for each site is when the site may have been launched. In order to find those dates I checked the [Wayback Machine](https://web.archive.org/) to figure out when the site was first saved in the Internet Archive. Not acuruate, but it's a start. 

Sites that are not cool and will be excluded:
- Commercial sites. [Do Nothing for 2 Minutes](http://www.donothingfor2minutes.com/) is kinda cool, but ultimately it is just a marketing site for Calm.
- Multiple pages sites. An extra _About_ page is okay, but any more is no bueno.
- Sites with ads. I understand hosting and domain renewal cost money, but no ads please.
- Ant the obvious: hate, crypto and other nonsense sites are not cool.

## Future Updates

While building the site I thought I had a fancy design that would work, but I was very wrong. I found **so many more sites** that I had to omit those for the launch. Am already workimg on a new more scalable design that will include them all the sites! 

- New design
- Sort and search
- Generate screenshots
- Add descriptions and maybe categories
- Some sort of automated script that flags dead sites

Got any other ideas for the site or know a cool site not on the list? Add it to the [GitHub repo](https://github.com/huphtur/single-serving-sites) or [hit me up on Mastodon](https://mastodon.social/@huphtur).

## CARDS UPDATE

New design is now live. Originally I planned to go for a table like design but it felt too spreadsheety, so I stuck with the cards. Introduced the most basic colors for new and visited links.

[![Safari desktop browser displaying the Single-Serving Sites page with a lot of cards.](/images/singleservingsitescards.png)](https://singleservingsites.cool/)

Added a Search/Filter and Sorting option with [list.js](https://listjs.com/). Somewhat dated resource but still works great.

Switched from using Tailwind to just handmade CSS. Not going to lie, Tailwind so much faster to develop with, but handmade CSS is much cleaner.

And of course added a ton of single-serving sites to the list!

## THUMBNAIL UPDATE

Now with screenshots! Was a bit of a struggle trying to figure out how to best do this. 

[![Safari desktop browser displaying the Single-Serving Sites page with a lot of cards and screenshots.](/images/singleservingsitesthumbs.png)](https://singleservingsites.cool/)

First I used a simple [Puppeteer](https://pptr.dev/) script to grab screenshots of all the sites. Then manually made some screenshots to improve the content.

And finally I used [11ty Image plugin](https://www.11ty.dev/docs/plugins/image/) to resize and convert to [AVIF](https://en.wikipedia.org/wiki/AVIF) format. This is all done on my local drive for now, as I'm still trying to figure out how to do best do this on the server without spending too many build minutes. 

