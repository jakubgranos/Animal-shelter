module.exports = (env, plugins, tasks) => () => {
  return plugins.gulp.src(`${tasks.html.src}/*.html`)
    .pipe(plugins.plumber())
    .pipe(plugins.fileInclude({ indent: true }))
    .pipe(plugins.gulp.dest(tasks.html.dest))
    .pipe(plugins.browserSync.stream());
}; 