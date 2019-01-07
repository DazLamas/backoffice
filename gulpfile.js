var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('compileStyles', function(){
  return gulp.src('assets/scss/app.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
});

// Watch changes on sass files
gulp.task('watch', function(){
  gulp.watch('assets/scss/**/*.scss', ['compileStyles']);
});
