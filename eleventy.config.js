const htmlmin = require('html-minifier');
const embedEverything = require('eleventy-plugin-embed-everything');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('./src/tailwind/output.css');

  eleventyConfig.addPassthroughCopy('src/images');

  if (!process.env.ELEVENTY_ENV) {
    eleventyConfig.addPassthroughCopy('./src/css/style.css');
  }

  const markdownIt = require('markdown-it');
  const options = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  eleventyConfig.addPlugin(pluginRss);
  
  eleventyConfig.addPlugin(embedEverything, {
    use: ['youtube', 'soundcloud'],
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
