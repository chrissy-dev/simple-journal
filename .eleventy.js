var devConfig = require("./.eleventy.dev.js")
var prodConfig = require("./.eleventy.prod.js")

module.exports = process.env.ELEVENTY_ENV === 'production' ? prodConfig : devConfig;