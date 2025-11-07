const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compila SCSS  CSS
function styles() {
  return gulp.src("./src/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

// Observa alterações
function watchFiles() {
  gulp.watch("./src/styles/*.scss", styles);
}

// Exporta tasks
exports.styles = styles;
exports.watch = watchFiles;
exports.default = styles;
