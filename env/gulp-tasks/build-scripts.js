// Usuwa cały build folder żeby nie zostały zadne zbędne pliki po poprzednim buildzie.

module.exports = (env, plugins, tasks) => () => {
  return plugins.browserify({ entries: `${tasks.scripts.src}/app.js`, debug: true })
    .transform(plugins.babelify, { presets: ['env'] })
    .bundle()
    .pipe(plugins.plumber())
    .pipe(plugins.vinylSourceStream('app.js'))
    .pipe(plugins.vinylBuffer())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(plugins.gulp.dest(tasks.scripts.dest))
    .pipe(plugins.browserSync.stream())
};