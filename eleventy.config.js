import markdownIt from 'markdown-it';
import pluginRss from '@11ty/eleventy-plugin-rss';
import lightningCSS from '@11tyrocks/eleventy-plugin-lightningcss';
import embeds from 'eleventy-plugin-embed-everything';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/_headers');
  eleventyConfig.addPassthroughCopy('src/localcopy.xslt');
  eleventyConfig.addPassthroughCopy({ 'src/favicon/': '/', });
  eleventyConfig.addPassthroughCopy('src/images');

  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary('md', markdownIt(mdOptions));

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
  eleventyConfig.addPlugin(lightningCSS);

  eleventyConfig.addPlugin(embeds, {
    use: ['youtube', 'soundcloud'],
    youtube: {
      options: {
        lite: true,
      },
    },
  });

  eleventyConfig.addPlugin(
    eleventyImageTransformPlugin,
    {
      extensions: 'html',
      formats: ['webp'],
      widths: [600, 1200, 1800, 2400, 'auto'],
      defaultAttributes: {
        sizes: '(min-width: 64em) 50vw, 100vw',
        loading: 'lazy',
        decoding: 'async',
      },
    },
  );

  eleventyConfig.addFilter('daysPassed', (value) => {
    return Math.ceil(
      (new Date(value) - new Date((new Date(value)).getFullYear(), 0, 1)) /
        (86400000),
    );
  });

  return {
    dir: {
      input: 'src',
    },
  };
}