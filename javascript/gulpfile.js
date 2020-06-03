const { src, dest, gulp } = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
var del = require('del');

exports.default = function () {
  return src('src/*.js', { sourcemaps: true })
    .pipe(babel())
    .pipe(concat('main.min.js'))
    .pipe(dest('temp/'));
};

exports.publish = function() {
    return src('temp/*.js', { sourcemaps: true })
    .pipe(babel())
    .pipe(minify())
    .pipe(dest('publish/'));
};

exports.clean = function() {
    return del([ 'temp' ]);
};


