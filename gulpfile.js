// NOTE: SETTINGS
const settings = {
	clean: true,
	scripts: true,
	polyfills: true,
	styles: true,
	svgs: true,
	img: true,
	copy: true,
	hbs: true,
	reload: true
};

// NOTE: PATHS
const paths = {
	input: 'source/',
	output: 'build/',
	scripts: {
		input: 'source/site-elements/js/*',
		polyfills: '',
		output: 'build/site-elements/js/'
	},
	styles: {
		input: 'source/site-elements/scss/**/*.{scss,sass}',
		output: 'build/site-elements/css/'
	},
	svgs: {
		input: 'source/site-elements/images/svg/*.{svg}',
		output: 'build/site-elements/images/svg/'
	},
	img: {
		input: 'source/site-elements/images/general/*.{png,jpg,jpeg}',
		output: 'build/site-elements/images/'
	},
	copy: {
		input: 'source/pages/*',
		output: 'build/'
	},
	hbs: {
		input: 'source/templates/*.hbs',
		output: 'build/'
	},
	reload: './build/'
};

// NOTE: FILE HEADERS
const banner = {
	full:
		'/*!\n' +
		' * <%= package.name %> \n' +
		' * <%= package.description %> \n' +
		' * <%= package.author %> \n' +
		' * <%= package.repository.url %> \n' +
		' */\n\n',
	min:
		'/*!' +
		' * <%= package.name %>' +
		' | <%= package.author %>' +
		' | <%= package.repository.url %>' +
		' */\n'
};

// NOTE: GULP START
const { gulp, src, dest, watch, series, parallel } = require('gulp');
const del = require('del');
const flatmap = require('gulp-flatmap');
const lazypipe = require('lazypipe');
const rename = require('gulp-rename');
const header = require('gulp-header');
const package = require('./package.json');

// NOTE: COPY
var handlebars = require('gulp-compile-handlebars');

// NOTE: SCRIPTS
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const optimisejs = require('gulp-optimize-js');

// NOTE: STYLES
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-cssnano');
const purgecss = require('gulp-purgecss');

// NOTE: SVGs
const svgmin = require('gulp-svgmin');

// NOTE: IMAGES
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// NOTE: BROWSERSYNC
const browserSync = require('browser-sync');

// NOTE: GULP TASKS

// NOTE: REMOVE EXISTING CONTENT FROM BUILD
const cleanDist = function(done) {
	// check is setting is enabled
	if (!settings.clean) return done();

	// clean the build folder
	del.sync([paths.output]);
	return done();
};

// NOTE: JS TASKS
const jsTasks = lazypipe()
	.pipe(
		header,
		banner.full,
		{ package: package }
	)
	.pipe(optimisejs)
	.pipe(
		dest,
		paths.scripts.output
	)
	.pipe(
		rename,
		{ suffix: '.min' }
	)
	.pipe(uglify)
	.pipe(optimisejs)
	.pipe(
		header,
		banner.min,
		{ package: package }
	)
	.pipe(
		dest,
		paths.scripts.output
	);

// NOTE: LINT, MINITFY AND CONCATENATE
const buildScripts = function(done) {
	if (!settings.scripts) return done();

	return src(paths.scripts.input).pipe(
		flatmap(function(stream, file) {
			if (file.isDirectory()) {
				var suffix = '';

				if (settings.polyfills) {
					// suffix = '.polyfills';
					suffix = '';

					src([
						file.path + '/*.js',
						'!' + file.path + '/*' + paths.scripts.polyfills
					])
						.pipe(concat(file.relative + '.js'))
						.pipe(jsTasks());
				}

				src(file.path + '/*.js')
					.pipe(concat(file.relative + suffix + '.js'))
					.pipe(jsTasks());

				return stream;
			}

			return stream.pipe(jsTasks());
		})
	);
};

// NOTE: LINT SCRIPTS
const lintScripts = function(done) {
	if (!settings.scripts) return done();

	return src(paths.scripts.input)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
};

// NOTE: PROCESS, LINT AND MINIFY SASS FILES
const buildStyles = function(done) {
	if (!settings.styles) return done();

	return src(paths.styles.input)
		.pipe(sass({ outputStyle: 'expanded', sourceComments: true }))
		.pipe(
			prefix({
				browsers: ['last 2 version', '> 0.25%'],
				cascade: true,
				remove: true
			})
		)
		.pipe(purgecss({ content: ['source/**/*.html', 'source/**/*.hbs'] }))
		.pipe(header(banner.full, { package: package }))
		.pipe(dest(paths.styles.output))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify({ discardComments: { removeAll: true } }))
		.pipe(header(banner.min, { package: package }))
		.pipe(dest(paths.styles.output));
};

// NOTE: OPTIMISE SVG FILES
const buildSVGs = function(done) {
	if (!settings.svgs) return done();

	return src(paths.svgs.input)
		.pipe(svgmin())
		.pipe(dest(paths.svgs.output));
};

// NOTE: OPTIMISE IMAGE FILES
const buildImages = function(done) {
	if (!settings.img) return done();

	return src(paths.img.input)
		.pipe(
			imagemin([
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 })
			])
		)
		.pipe(dest(paths.img.output))
		.pipe(webp())
		.pipe(dest(paths.img.output));
};

// NOTE: STATIC FILES TO BUILD FOLDER
const copyFiles = function(done) {
	if (!settings.copy) return done();

	return src(paths.copy.input).pipe(dest(paths.copy.output));
};

// NOTE: HBS FILES TO BUILD FOLDER
const hbsFiles = function(done) {
	if (!settings.hbs) return done();

	return src(paths.hbs.input)
		.pipe(
			handlebars(
				{},
				{
					ignorePartials: true,
					batch: ['./source/partials/']
				}
			)
		)
		.pipe(rename({ extname: '.html' }))
		.pipe(dest(paths.hbs.output));
};

// NOTE: WATCH FOR CHANGES TO THE SOURCE FOLDER
const startServer = function(done) {
	if (!settings.reload) return done();
	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});
	done();
};

// NOTE: RELOAD THE BROWSER WHEN FILES CHANGE
const reloadBrowser = function(done) {
	if (!settings.reload) return done();
	browserSync.reload();
	done();
};

// NOTE: WATCH FOR CHANGES
const watchSource = function(done) {
	watch(paths.input, series(exports.default, reloadBrowser));
	done();
};

// NOTE: EXPORT TASKS

// Default task (gulp)
exports.default = series(
	cleanDist,
	parallel(
		copyFiles,
		hbsFiles,
		buildScripts,
		lintScripts,
		buildStyles,
		buildSVGs,
		buildImages
	)
);

// Watch and reload (gulp watch)
exports.watch = series(exports.default, startServer, watchSource);
