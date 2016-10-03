var articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
  app.route('/articles')
    .post(articles.create)
    .get(articles.list);

  app.route('/articles/:articleId')
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);

  app.param('articleId', articles.articleByID);
};
