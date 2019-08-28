// const net = require('net');
const { connect } = require("./client");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(data, callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    if(key === '\u0003') {
      handleUserInput(key);
    }
  });

  return stdin;
}

const handleUserInput = function() {
  process.exit();
}

console.log('Connecting ...');
connect();
setupInput();