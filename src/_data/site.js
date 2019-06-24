/**
  Your global data folder is controlled by the dir.data configuration option. 
  All *.json and module.exports values from *.js files in this directory will 
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/
var version = require('../../package.json').version;

module.exports = {
  title: "Simple Journal",
  url: "https://log.chriscollins.me", // Don't end with a slash /
  description: "Writing Random Thoughts",
  copyright: {
    from: "2003",
    name: "Chris Collins"
  },
  social_meta: {
    twitter: "@scottishstoater",
    instagram: "scottishstoater",
    featured_image: "/assets/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV,
  version
};
