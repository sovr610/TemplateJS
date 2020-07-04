var gulp = require("gulp"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  { src, dest } = require("gulp"),
  minify = require("gulp-minify"),
  babel = require("gulp-babel"),
  sourcemaps = require("gulp-sourcemaps");
  var gulpJson = require('gulp-json');

const { series } = require("gulp");
var concat = require("gulp-concat");


var paths = {
  scripts: {
    src: ['src/app/**/*.js'],
    dest: 'publish'
  },
  json:{
    src: 'arc/app/swagger.json',
    dest: 'publish'
  }
};


function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(minify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

const build = gulp.series(scripts);
exports.default = build;


