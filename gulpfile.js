'use strict';

const plugins = require('gulp-load-plugins')({ pattern: '*' });
const gulp = plugins.gulp;
const env = {
  gulp,
  plugins,
  production_mode: false,
  path: {
    src: './src',
    dest: './docs'
  }
}

const tasks = {
  html: {
    src: `${env.path.src}/pages/`,
    dest: `${env.path.dest}`
  },
  styles: {
    src: `${env.path.src}/assets/scss/`,
    dest: `${env.path.dest}/assets/css/`
  },
  scripts: {
    src: `${env.path.src}/assets/js/`,
    dest: `${env.path.dest}/assets/js`
  },
  copy: {
    src: `${env.path.src}/assets-static/**/*`,
    dest: `${env.path.dest}/assets/`
  }
}

gulp.task('build-clean', require('./env/gulp-tasks/build-clean')(env, plugins, tasks));
gulp.task('build-styles', require('./env/gulp-tasks/build-styles')(env, plugins, tasks));
gulp.task('build-markup', require('./env/gulp-tasks/build-markup')(env, plugins, tasks));
gulp.task('build-scripts', require('./env/gulp-tasks/build-scripts')(env, plugins, tasks));
gulp.task('build-static-assets', require('./env/gulp-tasks/build-static-assets')(env, plugins, tasks));

gulp.task('serve', () => {
  plugins.browserSync.init({
    server: env.path.dest
  });

  gulp.watch(`${tasks.styles.src}/**/*.scss`, ['build-styles']);
  gulp.watch(`${tasks.html.src}/**/*.html`, ['build-markup']);
  gulp.watch(`${tasks.scripts.src}**/*.js`, ['build-scripts']);
});

gulp.task('build', (done) => {
  plugins.runSequence(
    'build-clean',
    ['build-styles', 'build-scripts'],
    'build-static-assets',
    'build-markup',
    done
  )
});

gulp.task('default', (done) => {
  plugins.runSequence(
    'build',
    'serve',
    done
  );
});