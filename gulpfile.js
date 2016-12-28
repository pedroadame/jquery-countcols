var gulp = require("gulp");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");

gulp.task("default", function(){
    return gulp.src("src/jquery.countcols.js")
         .pipe(babel())
         .pipe(uglify())
         .pipe(rename({ suffix: '.min' }))
         .pipe(gulp.dest("dist"));
});
