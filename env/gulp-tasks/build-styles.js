module.exports = (env, plugins, tasks) => () => {
  return plugins.gulp.src(`${tasks.styles.src}/main.scss`)
    .pipe(plugins.plumber())
    .pipe(plugins.if(env.production_mode, 
      plugins.sass({ outputStyle: 'compressed' }),
      plugins.sass()
    ))
    .pipe(plugins.gulp.dest(tasks.styles.dest))
    .pipe(plugins.browserSync.stream());
};