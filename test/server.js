var connect = require('connect');
connect.createServer(
  connect.logger('dev'),
  connect.static(__dirname + '/app')
).listen(9000);
