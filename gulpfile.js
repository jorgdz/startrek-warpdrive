var gulp = require('gulp')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')

gulp.task('browserify', function () {
  return browserify('./dist/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
})

gulp.task('watch', function () {
  gulp.watch('./dist/*.js', gulp.parallel('browserify'))
})

gulp.task('default', gulp.parallel('browserify'))