module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("cms");

  eleventyConfig.addFilter("json", function(value) {
    if (typeof value === 'undefined') return '[]';
    const cleanData = value.map(page => ({
      title: page.data.title,
      embedUrl: page.data.embedUrl
    }));
    return JSON.stringify(cleanData);
  });

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk", htmlTemplateEngine: "njk",
  };
};
