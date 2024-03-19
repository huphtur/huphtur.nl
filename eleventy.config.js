import embedEverything from 'eleventy-plugin-embed-everything';
import pluginRss from '@11ty/eleventy-plugin-rss';
import markdownIt from "markdown-it";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const INPUT_DIR = './src';
const OUTPUT_DIR = './_site/images';

export default async function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/styles.css');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/icon.svg');
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('src/icon-192.png');
  eleventyConfig.addPassthroughCopy('src/icon-512.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/images');

  eleventyConfig.addPlugin(pluginRss);

  let options = {
    html: true,
    linkify: true,
    typographer: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html",

    // Add any other Image utility options here:

    // optional, output image formats
    formats: ["webp"],
    // formats: ["auto"],

    // optional, output image widths
    // widths: ["auto"],
    widths: [600, 1200, 1800, "auto"],

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      sizes: "auto",
      loading: "lazy",
      decoding: "async"
    }
  });

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
