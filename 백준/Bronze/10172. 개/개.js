const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', () => {
  console.log(`|\\_/|`);
  console.log(`|q p|   /}`);
  console.log(`( 0 )"""\\`);
  console.log(`|"^"\`    |`);
  console.log(`||_/=\\\\__|`);
});