import gulp from 'gulp';

// Configurations
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify'
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import webpHtml from 'gulp-webp-html';

// Processing HTML
export default () => {
   return gulp.src(path.html.src)
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: 'HTML',
            massage: error.massage,
         })),
      }))
      .pipe(fileInclude())
      .pipe(webpHtml())
      .pipe(size({ title: 'before' }))
      .pipe(htmlmin(app.htmlmin))
      .pipe(size({ title: 'after' }))
      .pipe(gulp.dest(path.html.dest));
};