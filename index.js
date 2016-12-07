const handleKeyPress = require('./handle-keypress');

const { stdin } = process;

if (!stdin.setRawMode) {
  console.log('This process can only be run within a TTY context.');

  return;
}

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on( 'data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  handleKeyPress(key);
});
