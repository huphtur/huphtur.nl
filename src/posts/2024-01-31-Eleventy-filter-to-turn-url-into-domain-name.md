---
title: "Eleventy Filter to Turn a URL Into a Domain Name"
description: "ZOMG my first 11ty filter!"
date: 2024-01-31
intro: yes
---
For a new site I'm working on I needed to convert a URL `https://howmanydaysuntilomloop.com/` into just the domain name `howmanydaysuntilomloop.com`.

Originally I had a somewhat silly Liquid chain set up:

```liquid
{% raw %}{{ url | remove: "https://" | remove: "http://" | remove: "www." | remove: "/" }}{% endraw %}
```

After some digging on the internets I found a [good tutorial](https://w3collective.com/get-domain-name-url-javascript/) on how to do it much simpler via JavaScript. Bonus: it also strips the path. 

So I added the following to my `eleventy.config.js` file:

```js
eleventyConfig.addFilter("domainify", function(string) {
	return new URL(string).hostname.replace('www.','');
});
```

And voilà, I can now use it as a regular [filter](https://www.11ty.dev/docs/filters/) inside my 11ty build: 

```liquid
{% raw %}{{ url | domainify }}{% endraw %}
```
