const express = require('express');
const morgan = require('morgan');

// for the sake of this exercise, we'll just load the "database"
// on server start-up from static json files
const items = require('../data/items.json');
const comments = require('../data/comments');

function server() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(morgan('dev'));

  app.get('/api/items', (req, res) => {
    res.send(items.filter(item => item.userId === req.query.userId));
  });

  app.get('/api/comments', (req, res) => {
    res.send(comments)
  })

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`));

  return app;
}

if (require.main === module) server().start();

module.exports = server;
