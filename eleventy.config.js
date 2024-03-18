import embedEverything from 'eleventy-plugin-embed-everything';
import img2picture from 'eleventy-plugin-img2picture';
import pluginRss from '@11ty/eleventy-plugin-rss';
import markdownIt from "markdown-it";

const INPUT_DIR = './src';
const OUTPUT_DIR = './_site/images';

export default async function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/styles.css');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/icon.svg');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('src/icon-192.png');
  eleventyConfig.addPassthroughCopy('src/icon-512.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  eleventyConfig.addPlugin(pluginRss);

  let options = {
    html: true,
    linkify: true,
    typographer: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  if (process.env.ELEVENTY_ENV === 'production') {
    // also copy images for meta stuff
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPlugin(img2picture, {
      eleventyInputDir: INPUT_DIR,
      imagesOutputDir: OUTPUT_DIR,
      urlPath: '/images/',
      formats: ['webp'],
      // sizes: '(min-width: 960px) 720px, 100vw',
      minWidth: 480,
      maxWidth: 2400,
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
