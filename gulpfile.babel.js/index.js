import gulp from 'gulp';
import browserSync from 'browser-sync';

// Configuration
import path from './config/path.js';
import app from './config/app.js';

// Tasks
import clear from './task/clear.js';
import pug from './task/pug.js';
// const scss = require('./task/scss');
import js from './task/js.js';
import img from './task/img.js';
import font from './task/font.js';

// Server
const server = () => {
   browserSync.init({
      server: {
         baseDir: path.root,
      },
   });
};

// Watching
const watcher = () => {
   gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
   // watch(path.scss.watch, scss).on('all', browserSync.reload);
   gulp.watch(path.js.watch, js).on('all', browserSync.reload);
   gulp.watch(path.img.watch, img).on('all', browserSync.reload);
   gulp.watch(path.font.watch, font).on('all', browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(pug, js, img, font /*scss*/));

const dev = gulp.series(build, gulp.parallel(watcher, server));

// Tasks
export { clear };
export { pug };
// exports.scss = scss;
export { js };
export { img };
export { font };

// Build
export default app.isProd ? build : dev;
