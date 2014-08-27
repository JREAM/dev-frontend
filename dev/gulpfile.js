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
    source: {
        sass:   "dev/sass/*.scss",
        coffee: "dev/coffee/*.coffee",
        js_third_party: "../public/third-party/*.js",
        css_third_party: "../public/third-party/*.css",
    },
    destination: {
        js:    "../public/js/",
        css:   "../public/css/",
        js_third_party: "../public/third-party/",
        css_third_party: "../public/third-party/"
    }
};

/** Coffee */
gulp.task('coffee', function () {
    return gulp.src(dir.source.coffee)
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest(dir.destination.js));
});

/** SASS */
gulp.task('sass', function() {
    return gulp.src(dir.source.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest(dir.destination.css))
});

/** Minify the Local JS */
gulp.task('local_js', function() {
    return gulp.src(dir.destination.js)
        .pipe(uglify())
        .pipe(gulp(dir.destination.js))
});

/** Minify the Third Party into one file */
gulp.task('third_party_js', function() {
    return gulp.src(dir.source.js_third_party)
        .pipe(uglify())
        .pipe(concat())
        .pipe(gulp(dir.destination.js_third_party))
});

/** Minify the Third Party into one file */
gulp.task('third_party_js', function() {
    return gulp.src(dir.source.js_third_party)
        .pipe(uglify())
        .pipe(gulp(dir.destination.js_third_party))
});

/** Compile */
gulp.task('default', ['coffee', 'sass']);

/** Watch */
gulp.task('watch', function() {
    watch({
	   glob: dir.source.coffee,
	   emitOnGlob: false
    }, ['coffee']);

    watch({
        glob: dir.source.sass,
        emitOnGlob: false
    }, ['sass']);
});
