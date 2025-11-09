const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const paths = {
  html: {
    src: "./src/**/*.html",
    dest: "./dist",
  },
  styles: {
    src: "./src/styles/main.scss",
    watch: "./src/styles/**/*.scss",
    dest: "./dist/css",
  },
};

function html() {
  return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest));
}

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

function watchFiles() {
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.watch, styles);
}

const build = gulp.series(gulp.parallel(html, styles));

exports.html = html;
exports.styles = styles;
exports.watch = watchFiles;
exports.build = build;
exports.default = build;