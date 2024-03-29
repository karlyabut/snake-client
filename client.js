const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.on("data", function(data) {
    console.log(data);
  })
  conn.setEncoding('utf8'); 

  conn.on("connect", function() {
    console.log("Connection success!");
    conn.write("Name: KEY");
    // conn.write("Move: up");
  });

  // conn.on("data", function(data) {
  // })

  return conn;
}

module.exports = { connect };