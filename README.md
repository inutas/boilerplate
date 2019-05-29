# Project boilerplate [![Build Status](https://travis-ci.com/University-of-Hull/project-boilerplate.svg?token=69ckJa4VXSaQchDQg4bW&branch=master)](https://travis-ci.com/University-of-Hull/project-boilerplate)

A project boilerplate that utilises [Gulp 4](https://gulpjs.com/).

**Features**

- Build HTML files using Handlebars templates.
- Select which JavaScript files to concatenate and include them in a single file.
- Minify JavaScript files.
- Linting with JSHint.
- Uses 7-1 Sass architecture folder structure. [7-1 Guidelines](https://sass-guidelin.es/#the-7-1-pattern)
- Compile, minify, autoprefix and lint Sass/SCSS.
- Strip out any unused styles from CSS files.
- Identify scripts and styles with project details.
- Creates sourcemaps for both minified scripts and styles.
- Reduce JPG file sizes and make a WebP copy.
- Optimise SVGs.
- Watch for file changes and automatically recompile.
- Reload webpages.

## Getting started

Make sure have the following installed:

[Node.js](https://nodejs.org/en/)  
[Gulp Command Line Utility](https://gulpjs.com/) `npm install -g gulp-cli`

##

**Quick Start**

- In your terminal change to your project directory.
- To install the project use `npm install` for all files and dependencies.
- When complete, run one of the following tasks:
  - `gulp` manually compiles files.
  - `gulp watch` automatically compiles files and applies changes using BrowserSync.

After compiling a new folder called `dist` will appear, this folder will house all your compiled files.

**Note:** Gulp only uses `devDependencies`.

##

**Using Includes for JavaScript**

Files listed with `require` will only be included if it has not been included before.

- `//=require vendor/jquery.js` _(Specific file in the vendor folder)_
- `//=require vendor/**/*.js` _(Any and all folders/files in the vendor folder)_

Files list with `include` will always be included.

- `//=include relative/path/to/file.js`

##

**General docs**

[Node.js](https://nodejs.org/en/)  
[NPM Docs](https://www.npmjs.com/)  
[Gulp Docs](https://gulpjs.com/)

**Template docs**

[Handlebars Docs](https://handlebarsjs.com/)

**Styles**

[Sass/SCSS](https://sass-lang.com/)  
[rscss](https://rscss.io/)

**Package docs**

[browser-sync](https://browsersync.io/)  
[del](https://github.com/sindresorhus/del#readme)  
[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer#readme)  
[gulp-clean-css](https://github.com/scniro/gulp-clean-css#readme)  
[gulp-compile-handlebars](https://github.com/kaanon/gulp-compile-handlebars#readme)  
[gulp-concat](https://github.com/gulp-community/gulp-concat#readme)  
[gulp-flatmap](https://github.com/mariusGundersen/gulp-flatmap#readme)  
[gulp-header](https://github.com/tracker1/gulp-header#readme)  
[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin#readme)  
[gulp-include](https://github.com/wiledal/gulp-include#readme)  
[gulp-jshint](https://github.com/spalger/gulp-jshint#readme)  
[gulp-optimize-js](https://github.com/prateekbh/gulp-optimize-js#readme)  
[gulp-purgecss](https://github.com/FullHuman/gulp-purgecss#readme)  
[gulp-rename](https://github.com/hparra/gulp-rename#readme)  
[gulp-sass](https://github.com/dlmanning/gulp-sass#readme)  
[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps#readme)  
[gulp-svgmin](https://github.com/ben-eb/gulp-svgmin#readme)  
[gulp-terser](https://github.com/duan602728596/gulp-terser#readme)  
[gulp-webp](https://github.com/sindresorhus/gulp-webp#readme)  
[jshint-stylish](https://github.com/sindresorhus/jshint-stylish#readme)  
[lazypipe](https://github.com/OverZealous/lazypipe#readme)

