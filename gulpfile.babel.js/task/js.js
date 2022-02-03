import gulp from 'gulp';

// Configurations
import path from '../config/path.js';
import app from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
// import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';

// Processing JavaScript
export default () => {
   return gulp.src(path.js.src, { sourcemaps: true })
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: 'JavaScript',
            massage: error.massage,
         })),
      }))
      .pipe(babel())
      .pipe(webpack(app.webpack))
      // .pipe(uglify())
      .pipe(gulp.dest(path.js.dest, { sourcemaps: true }));
};