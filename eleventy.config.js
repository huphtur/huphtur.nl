const htmlmin = require('html-minifier');
const embedEverything = require('eleventy-plugin-embed-everything');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

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
    youtube: {
      options: {
        lazy: true,
      },
    },
  });

  eleventyConfig.addPlugin(pluginLocalRespimg, {
    folders: {
      source: 'src', // Folder images are stored in
      output: '_site', // Folder images should be output to
    },
    images: {
      resize: {
        min: 480, // Minimum width to resize an image to
        max: 1440, // Maximum width to resize an image to
        step: 480, // Width difference between each resized image
      },
      gifToVideo: false, // Convert GIFs to MP4 videos
      sizes: '100vw', // Default image `sizes` attribute
      lazy: true, // Include `loading="lazy"` attribute for images
      watch: {
        src: 'images/**/*', // Glob of images that Eleventy should watch for changes to
      },
      pngquant: {
        /* ... */
      }, // imagemin-pngquant options
      mozjpeg: {
        /* ... */
      }, // imagemin-mozjpeg options
      svgo: {
        /* ... */
      }, // imagemin-svgo options
      gifresize: {
        /* ... */
      }, // @gumlet/gif-resize options
      webp: {
        quality: 50,
      }, // imagemin-webp options
      gifwebp: {
        /* ... */
      }, // imagemin-gif2webp options
    },
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
