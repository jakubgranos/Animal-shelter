module.exports = (env, plugins, tasks) => () => {
  return plugins.gulp.src(tasks.copy.src)
  .pipe(plugins.gulp.dest(tasks.copy.dest))
};