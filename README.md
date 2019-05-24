# Project boilerplate 
![alt text](https://travis-ci.com/University-of-Hull/project-boilerplate.svg?token=69ckJa4VXSaQchDQg4bW&branch=master "Travis CI status")
A project boilerplate that utilises [Gulp 4](https://gulpjs.com/).

**Features**

- Copy static files and folders to the `build` folder.
- Build HTML files using Handlebars templates.
- Linting with JSHint.
- Concatenate and minify JavaScript files.
- Compile, minify, autoprefix and lint Sass/SCSS.
- Strip out any unused styles from CSS files.
- Optimise SVGs.
- Reduce JPG files and make a WebP copy.
- Identify scripts and styles with project details.
- Watch for file changes and automatically recompile.
- Reload webpages.
- Ability to turn features on and off.

## Getting started

Make sure have the following installed:

[Node.js](https://nodejs.org/en/)  
[Gulp Command Line Utility](https://gulpjs.com/) `npm install -g gulp-cli`

**Quick Start**

- In your terminal change to your project directory.
- To install the project use `npm install` for all files and dependencies.
- When complete, run one of the following tasks:
  - `gulp` compiles files
  - `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/)

After compiling a new folder called `build` will appear, this folder will house all your compiled files.

**Note:** Gulp only uses `devDependencies` anything else and it'll break.

---

**General docs**

[Node.js](https://nodejs.org/en/)  
[NPM Docs](https://www.npmjs.com/)  
[Gulp Docs](https://gulpjs.com/)

**Template docs**

[Handlebars Docs](https://handlebarsjs.com/)

**Styles**

[Sass/SCSS](https://sass-lang.com/)  
[rscss](https://rscss.io/)

**Github docs**
[browser-sync](https://browsersync.io/)  
[del](https://github.com/sindresorhus/del#readme)  
[gulp](https://gulpjs.com/)  
[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer#readme)  
[gulp-clean-css](https://github.com/scniro/gulp-clean-css#readme)  
[gulp-compile-handlebars](https://github.com/kaanon/gulp-compile-handlebars)  
[gulp-concat](https://github.com/gulp-community/gulp-concat#readme)  
[gulp-flatmap](https://github.com/mariusGundersen/gulp-flatmap#readme)  
[gulp-header](https://github.com/tracker1/gulp-header#readme)  
[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin#readme)  
[gulp-jshint](https://github.com/spalger/gulp-jshint)  
[gulp-optimize-js](https://github.com/prateekbh/gulp-optimize-js#readme)  
[gulp-purgecss](https://github.com/FullHuman/gulp-purgecss#readme)  
[gulp-rename](https://github.com/hparra/gulp-rename)  
[gulp-sass](https://github.com/dlmanning/gulp-sass#readme)  
[gulp-svgmin](https://github.com/ben-eb/gulp-svgmin)  
[gulp-terser](https://github.com/duan602728596/gulp-terser#readme)  
[gulp-webp](https://github.com/sindresorhus/gulp-webp#readme)  
[jshint](https://jshint.com/)  
[jshint-stylish](https://github.com/sindresorhus/jshint-stylish#readme)  
[lazypipe](https://github.com/OverZealous/lazypipe)
