var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require('sass');
gulp.task("watch", function () {
  return gulp.watch("scss/**/*.scss", function () {
    return (
      gulp.src("scss/**/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }).on("error", sass.logError))
        .pipe(gulp.dest("./css"))
    );
  })
});
