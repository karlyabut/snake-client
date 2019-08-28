let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  console.log(connection);
  handleUserInput();

  return stdin;
}

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    console.log(key);
    if(key === '\u0003') {
      // console.log("I DID IT!");
      process.exit();
    }
    if(key === "w") {
      console.log("Moving up");
      connection.write("Move: up");
    } else if (key === "s") {
      console.log("moving down");
      connection.write("Move: down");
    } else if (key === "a") {
      console.log("moving left");
      connection.write("Move: left");
    } else if (key === "d") {
      console.log("moving right");
      connection.write("Move: right");
    }
  });
}

module.exports = { setupInput };