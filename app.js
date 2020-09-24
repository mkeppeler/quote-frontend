module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  const app = require('express')()

  app.set('views',__dirname + '/views');
  app.set('view engine', 'pug')

  app.get('/', (req, res) => {
    // Use req.log (a `pino` instance) to log JSON:
    // req.log.info({message: 'Hello from Appsody!'});
    // res.send('Hello from Appsody!');
    res.redirect('/quote');
  });

  var quote = require('./quote.js');
  app.use('/quote', quote);

  module.exports.app = app;

  return app;
};
