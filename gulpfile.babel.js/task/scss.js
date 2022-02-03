import gulp from 'gulp';

// Configurations
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
// import rename from 'gulp-rename';
// import size from 'gulp-size';
import webpCss from 'gulp-webp-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// Processing SCSS
export default () => {
   return gulp.src(path.scss.src, { sourcemaps: true })
      .pipe(sass())
      .pipe(webpCss())
      .pipe(autoprefixer(app.autoprefixer))
      // .pipe(size({ title: 'main.css' }))
      // .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
      // .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      // .pipe(size({ title: 'main.min.css' }))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
};