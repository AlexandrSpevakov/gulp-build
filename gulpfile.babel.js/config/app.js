const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
   isProd: isProd,
   isDev: isDev,

   htmlmin: {
      collapseWhitespace: true,
   },

   autoprefixer: {
      grid: true,
      cascade: true,
   },

   webpack: {
      mode: 'production',
   },

   imagemin: {
      verbose: true,
   },

   fonter: {
      formats: ['ttf', 'woff', 'svg'],
   },
};
