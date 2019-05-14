const {
    src,
    dest,
    watch,
    parallel
} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function buildjs() {
    return src('./app/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(dest('www/js/'));
}

function buildcss() {
    return src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            "uglyComments": true
          }))
        .pipe(dest('./www/css/'));
}

exports.watch = function() {
    watch('./app/scss/**/*.scss', buildcss);
    watch('./app/js/**/*.js', buildjs);
}

exports.build = parallel(buildjs, buildcss);

// exports.concat = function () {
//     return src('build/js/vendor/*.js')
//         .pipe(concat('vendor.min.js'))
//         .pipe(dest('dist/js/vendor/test'));
// }