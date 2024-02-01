const newsRouter = require('./news');
const commonRouter = require('./common');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', commonRouter);
}

module.exports = route;
