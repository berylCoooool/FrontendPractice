(function() {
  var app, express;

  express = require('express');

  app = express();

  app.use(express["static"](__dirname + '/newCircleApp'));

  app.listen("8889");

  console.log('Server started at http://localhost:8889');

}).call(this);
