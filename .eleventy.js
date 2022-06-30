const embedEverything = require('eleventy-plugin-embed-everything');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/tailwind.css');

  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/icon.svg');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('src/icon-192.png');
  eleventyConfig.addPassthroughCopy('src/icon-512.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(embedEverything, {
    use: ['youtube', 'soundcloud'],
    youtube: {
      options: {
        lazy: true,
      },
    },
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
