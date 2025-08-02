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
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

// Error handling
const errorHandler = {
  errorHandler: function(err) {
    console.log('Error:', err.message);
    this.emit('end');
  }
};

// Compile Sass with sourcemaps
function compileSass() {
  return gulp.src('./src/css/*.scss')
    .pipe(plumber(errorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}

// Watch Sass with improved watching
function watchSass() {
  gulp.watch('./src/css/*.scss', compileSass);
  gulp.watch('./src/css/**/*.scss', compileSass);
}

// Browser Sync with improved configuration
function browserSyncInit() {
  browserSync.init({
    server: {
      baseDir: './src/html',
      routes: {
        '/css': './src/css',
        '/js': './src/js'
      }
    },
    port: 3000,
    open: true,
    notify: false,
    files: [
      './src/html/*.html',
      './src/css/*.css',
      './src/js/*.js'
    ],
    reloadDelay: 100,
    reloadDebounce: 250
  });
}

// Clean dist folder
function clean() {
  return del(['dist'], { force: true });
}

// Copy Fonts
function copyFonts() {
  return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}')
    .pipe(gulp.dest('./dist/fonts'));
}

// Copy HTML files
function copyHtml() {
  return gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist/'));
}

// Optimize Images (removed since we deleted img folder)
function optimizeImages() {
  return gulp.src('src/img/*.{png,jpg,gif,svg}')
    .pipe(plumber(errorHandler))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('dist/img'));
}

// Minify and revision assets
function processUsemin() {
  return gulp.src('./src/html/*.html')
    .pipe(plumber(errorHandler))
    .pipe(flatmap((stream, file) => {
      return stream.pipe(usemin({
        css: [
          sourcemaps.init(),
          rev(),
          cleanCss({
            level: {
              1: {
                specialComments: 0,
                removeEmpty: true,
                removeWhitespace: true
              },
              2: {
                mergeMedia: true,
                removeEmpty: true,
                removeDuplicateFontRules: true,
                removeDuplicateMediaBlocks: true,
                removeDuplicateRules: true,
                removeEmpty: true,
                removeUnusedAtRules: false
              }
            }
          }),
          sourcemaps.write('.')
        ],
        html: [
          htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          })
        ],
        js: [
          sourcemaps.init(),
          uglify({
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }),
          rev(),
          sourcemaps.write('.')
        ],
        inlinejs: [uglify()],
        inlinecss: [cleanCss(), 'concat']
      }));
    }))
    .pipe(gulp.dest('dist/'));
}

// Watch all files
function watchFiles() {
  gulp.watch('./src/css/*.scss', compileSass);
  gulp.watch('./src/css/**/*.scss', compileSass);
  gulp.watch('./src/html/*.html').on('change', browserSync.reload);
}

// Development task
const dev = gulp.series(
  compileSass,
  gulp.parallel(browserSyncInit, watchFiles)
);

// Build task
const build = gulp.series(
  clean,
  gulp.parallel(copyFonts, copyHtml, processUsemin)
);

// Production build task
const production = gulp.series(
  clean,
  compileSass,
  gulp.parallel(copyFonts, copyHtml, processUsemin)
);

// Expose tasks
exports.sass = compileSass;
exports.watch = watchFiles;
exports['browser-sync'] = browserSyncInit;
exports.clean = clean;
exports.copyfonts = copyFonts;
exports.copyhtml = copyHtml;
exports.imagemin = optimizeImages;
exports.usemin = processUsemin;
exports.dev = dev;
exports.build = build;
exports.production = production;
exports.default = dev;
