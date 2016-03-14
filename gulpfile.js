'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	refresh = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

<<<<<<< HEAD
=======

/*gulp.task('scripts', function() {  
    gulp.src(['assets/js/*.js'])
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(refresh(server))
});*/

>>>>>>> e8b9153a7ad1991e1a803ba07f79cdde0b98d9e5
gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});


gulp.task('html', function () {
  gulp.src('public/*.html')
    .pipe(connect.reload());
});


gulp.task('sass', function () {
  return gulp.src('assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});

gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});


gulp.task('default', function() {  
    gulp.run('connect', 'html', 'sass');

<<<<<<< HEAD
=======
	/*
	gulp.run('lr-server', 'scripts', 'sass');
	
    gulp.watch('assets/js/**', function(event) {
        gulp.run('scripts');
    }) */

>>>>>>> e8b9153a7ad1991e1a803ba07f79cdde0b98d9e5
    gulp.watch('assets/sass/**.scss', function(event) {
        gulp.run('sass');
    }) 

     gulp.watch('public/*.html', function(event) {
        gulp.run('html');
    }) 
})