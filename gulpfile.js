var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('compileStyles', function(){
  return gulp.src('app/scss/app.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

// Watch changes on sass files
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['compileStyles']);
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('compileStyles'));
  gulp.watch('app/views/**/*.scss', gulp.series('compileStyles'));
});
