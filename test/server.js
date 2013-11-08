var connect = require('connect'),
    port = process.env.PORT || 9000;

connect.createServer(
  connect.static(__dirname + '/app')
).listen(port);
