import gulp from 'gulp';

// Configurations
import path from '../config/path.js';

// Plugins
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import compilerSass from 'sass';
import gulpSass from 'gulp-sass';
import webpCss from 'gulp-webp-css';

const sass = gulpSass(compilerSass);

// Processing SCSS
export default () => {
   return gulp.src(path.scss.src, { sourcemaps: true })
      .pipe(sass())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(size({ title: 'main.css' }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(size({ title: 'main.min.css' }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
};