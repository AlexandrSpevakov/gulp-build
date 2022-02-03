import gulp from 'gulp';

// Configurations
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';

// Processing IMG
export default () => {
   return gulp.src(path.img.src)
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: 'IMG',
            massage: error.massage,
         })),
      }))
      .pipe(newer(path.img.dest))
      .pipe(webp())
      .pipe(gulp.dest(path.img.dest))
      .pipe(gulp.src(path.img.src))
      .pipe(newer(path.img.dest))
      .pipe(imagemin(app.imagemin))
      .pipe(gulp.dest(path.img.dest));
};