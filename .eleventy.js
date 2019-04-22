const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy("src/assets/images");
  // eleventyConfig.addPassthroughCopy("src/assets/static");

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Clean CSS Filter
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Ordinal date
  eleventyConfig.addFilter("ordinal", function(date) {
    return date + (date > 0 ? ['th', 'st', 'nd', 'rd'][(date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10] : '');
  });

  eleventyConfig.addCollection("sortedEntries", function(collection) {
    return collection.getFilteredByTag("entries").reverse();;
  });

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
