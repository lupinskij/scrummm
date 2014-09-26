var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    hbsfy       = require('hbsfy');

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'hbsfy'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

// Compiles custom sass
gulp.task('sass', function () {
  gulp.src('src/sass/main.sass')
    .pipe(sass({
      sourceComments: 'normal',
      errLogToConsole: true,
    }))
    // Production
    // .pipe(minCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.*', ['build']);
  gulp.watch('src/sass/*.sass', ['sass']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['browserify', 'copy', 'sass']);
