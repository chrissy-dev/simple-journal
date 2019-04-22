/**
  Your global data folder is controlled by the dir.data configuration option. 
  All *.json and module.exports values from *.js files in this directory will 
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

module.exports = {
  title: "Hiking & Camping Log",
  url: "https://log.chriscollins.me", // Don't end with a slash /
  description: "Personal Hiking Log",
  copyright: {
    from: "2003",
    name: "Chris Collins"
  },
  social_meta: {
    twitter: "@chrisssycollins",
    instagram: "scottishstoater",
    featured_image: "/assets/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV
};
