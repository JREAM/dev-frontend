/** Packages */
var gulp    = require('gulp')
    coffee  = require('gulp-coffee'),
    sass    = require('gulp-sass')
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber')
    concat  = require('gulp-concat')
    flatten = require('gulp-flatten')
    minify  = require('gulp-minify-css');

/** Dirs */
var dir = {
    src_sass:   "dev/sass/*.scss",
    src_coffee: "dev/coffee/*.coffee",
    dest_js:    "public/js/",
    dest_css:   "public/css/"
};

/** Coffee */
gulp.task('coffee', function () {
    return gulp.src(dir.src_coffee)
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest(dir.dest_js));
});

/** SASS */
gulp.task('sass', function() {
    return gulp.src(dir.src_sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest(dir.dest_css))
});

/** Compile */
gulp.task('default', ['coffee', 'sass']);

/** Watch */
gulp.task('watch', function() {
     watch({
	glob: dir.src_coffee, 
	emitOnGlob: false
    }, ['coffee']);

    watch({
      glob: dir.src_sass, 
      emitOnGlob: false
    }, ['sass']);
});
