import gulp from 'gulp';

// Configurations
import path from '../config/path.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import compilerSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(compilerSass);

// Processing SCSS
export default () => {
   return gulp.src(path.scss.src, { sourcemaps: true })
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: 'SCSS',
            massage: error.massage,
         })),
      }))
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(size({ title: 'main.css' }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(size({ title: 'main.min.css' }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
};