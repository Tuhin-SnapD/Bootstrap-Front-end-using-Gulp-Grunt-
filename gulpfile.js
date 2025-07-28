'use strict';

const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cleanCss = require('gulp-clean-css');
const flatmap = require('gulp-flatmap');
const htmlmin = require('gulp-htmlmin');

// Compile Sass
function compileSass() {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

// Watch Sass
function watchSass() {
  gulp.watch('./css/*.scss', compileSass);
}

// Browser Sync
function browserSyncInit() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
    ]
  });
}

// Clean dist folder
function clean() {
  return del(['dist']);
}

// Copy Fonts
function copyFonts() {
  return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('./dist/fonts'));
}

// Optimize Images
function optimizeImages() {
  return gulp.src('img/*.{png,jpg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
}

// Minify and revision assets
function processUsemin() {
  return gulp.src('./*.html')
    .pipe(flatmap((stream, file) => {
      return stream.pipe(usemin({
        css: [rev()],
        html: [htmlmin({ collapseWhitespace: true })],
        js: [uglify(), rev()],
        inlinejs: [uglify()],
        inlinecss: [cleanCss(), 'concat']
      }));
    }))
    .pipe(gulp.dest('dist/'));
}

// Default task
const defaultTask = gulp.series(
  compileSass,
  gulp.parallel(browserSyncInit, watchSass)
);

// Build task
const build = gulp.series(
  clean,
  gulp.parallel(copyFonts, optimizeImages, processUsemin)
);

// Expose tasks
exports.sass = compileSass;
exports.watch = watchSass;
exports['browser-sync'] = browserSyncInit;
exports.clean = clean;
exports.copyfonts = copyFonts;
exports.imagemin = optimizeImages;
exports.usemin = processUsemin;
exports.build = build;
exports.default = defaultTask;
