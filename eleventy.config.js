const embedEverything = require('eleventy-plugin-embed-everything');
const img2picture = require('eleventy-plugin-img2picture');
const pluginRss = require('@11ty/eleventy-plugin-rss');

const INPUT_DIR = './src';
const OUTPUT_DIR = './_site/images';

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  // eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/icon.svg');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('src/icon-192.png');
  eleventyConfig.addPassthroughCopy('src/icon-512.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPlugin(pluginRss);

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addPlugin(img2picture, {
      eleventyInputDir: INPUT_DIR,
      imagesOutputDir: OUTPUT_DIR,
      urlPath: '/images/',
      formats: ['webp'],
      // sizes: '(min-width: 960px) 720px, 100vw',
      minWidth: 480,
      maxWidth: 1440,
      widthStep: 320,
      // sharpAvifOptions: {
      //   lossless: true,
      //   quality: 1,
      // },
    });
  } else {
    eleventyConfig.addPassthroughCopy('src/images');
  }

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
      input: INPUT_DIR,
    },
  };
};
