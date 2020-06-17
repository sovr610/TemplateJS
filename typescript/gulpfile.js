var gulp = require("gulp"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  { src, dest } = require("gulp"),
  minify = require("gulp-minify"),
  babel = require("gulp-babel"),
  sourcemaps = require("gulp-sourcemaps");
  var del = require("del");
  var count = require('gulp-count');

const { series } = require("gulp");
var concat = require("gulp-concat");

async function concats() {
  return src(["./build/util.js","./build/app.js"])
    .pipe(concat("all.js"))
    .pipe(dest("./dest/"));
}

function minifys() {
  return src(["./dest/all.js"])
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./bin/"))
}

exports.default = series(concats);
exports.minify = minifys;