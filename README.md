# Simple Journal 🏕️

A simple journal/photo log website built on top of [Blazin'/11ty](https://github.com/chrisssycollins/blazin-eleventy-boilerplate). 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrisssycollins/simple-journal)

---

### [View demo](https://simplejournal.chriscollins.me)

## Features 

- This project uses Eleventy as a static site generator
- Templating is Liquid (can be changed if you want)
- PostCSS set up to handle:
	- TailwindCSS
	- Nested CSS
	- Autoprefixer 
- PurgeCSS to remove unused CSS (Set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- A good handful of SEO meta tags set up

## How to use 

### Creating an entry 

An entry is simple a page in the log. They are basic markdown files with minimal required meta data.

All entries live within the `./src/entries` folder. You can organise this folder and name the files any way you want, although it's recommended you use some form of dates in your file name to keep track. 

To create an entry for *"25th Feburary 2021* create file called `2021-02-25-title-of-entry.md` in `./src/entries/`, the following is the only data required:

```yml
---
name: Wild Camping at Loch Ossian, Scotland # Required 
date: 2021-02-25 # Required
---

Body content here, ~you~ can use *markdown*.
```

### Adding images to an entry

Simple Journal looks for images stored in `./src/assets/images/entries/**` to check for a folder matching the date of your entry. 

To add images to the above example create a folder matching the date of your entry in `./src/assets/images/entries/2021-02-25` and add your images.

## Note

This is an open sourced version of a personal project, hopefully other find use out of it. Let me know if you use it. 
