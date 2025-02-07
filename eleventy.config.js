import markdownIt from 'markdown-it';
import pluginRss from '@11ty/eleventy-plugin-rss';
import embeds from 'eleventy-plugin-embed-everything';
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/bundle.css");
  eleventyConfig.addPassthroughCopy("src/bundle.js");
  eleventyConfig.addPassthroughCopy('src/_headers');
  eleventyConfig.addPassthroughCopy('src/localcopy.xslt');
  eleventyConfig.addPassthroughCopy({ 'src/favicon/': '/', });
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/.well-known/');

  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary('md', markdownIt(mdOptions));

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["webp", "jpeg"],

		// output image widths
		widths: ["auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
	});

  eleventyConfig.addPlugin(embeds, {
    use: ['youtube', 'soundcloud'],
    youtube: {
      options: {
        lite: {
          responsive: true
        }
      },
    },
  });

  return {
    dir: {
      input: 'src',
    },
  };
}