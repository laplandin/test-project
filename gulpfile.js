"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var del = require("del");
var rename = require("gulp-rename");

gulp.task("copy", function() {
  gulp.src([
    "img/**/*{.jpg,.png,.svg}",
    "js/**/*.js",
    "fonts/**/*{.woff,.woff2}",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("copyHtml", function() {
  gulp.src("*.html")
  .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 3 version"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
