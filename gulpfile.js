'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var spriteSmith = require('gulp.spritesmith');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var connect = require('gulp-webserver');

/* sass & compress */

gulp.task('sass', function() {
  gulp.src('./src/sass/*.scss')
      .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

/* spriteSmith */

gulp.task('sprite', function() {
    var spriteData = gulp.src('./src/sprites/*.png')
      .pipe(spriteSmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '../images/sprite.png',
        cssFormat: 'scss'
      }));
      spriteData.img
        .pipe(gulp.dest('./images/'));
      spriteData.css
        .pipe(gulp.dest('./src/sass/parts/'));
});

/* browserify & babel & uglify  */

gulp.task('browserify', function() {
  browserify('./src/js/poketype.js')
  .transform(babelify.configure({
    presets: ["react","es2015"]
  }))
  .bundle()
  .on('error', function(err){
      console.log(err.message);
      console.log(err.stack);
  })
  .pipe(source("poketype.js"))
  .pipe(buffer())
  .pipe(uglify({ preserveComments: 'some' }))
  .pipe(gulp.dest('./js/'));
});

/* reactをProduct Buildにする */

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

/* connect */

gulp.task('connect', function() {
  gulp.src('./')
    .pipe(connect());
});
