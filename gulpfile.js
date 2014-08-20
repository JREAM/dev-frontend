var gulp    = require('gulp')
    coffee  = require('gulp-coffee'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber');

gulp.task('watch', function () {
    gulp.src('coffee/*.coffee')
        .pipe(watch())
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('js/'));
});

gulp.task('default', []);
