// Usuwa cały build folder żeby nie zostały zadne zbędne pliki po poprzednim buildzie.

module.exports = (env, plugins, tasks) => () => {
  return plugins.del([env.path.dest]);
};