const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", (line) => input.push(line));
rl.on("close", () => {
  const N = parseInt(input[0]);
  const friends = input.slice(1).map(row => row.split('').map(c => c === 'Y' ? 1 : 0));

  let maxTwoFriends = 0;

  for (let i = 0; i < N; i++) {
    let twoFriendSet = new Set();

    for (let j = 0; j < N; j++) {
      if (friends[i][j] === 1) twoFriendSet.add(j);
      else {
        for (let k = 0; k < N; k++) {
          if (friends[i][k] === 1 && friends[k][j] === 1) {
            twoFriendSet.add(j);
            break;
          }
        }
      }
    }

    twoFriendSet.delete(i);
    maxTwoFriends = Math.max(maxTwoFriends, twoFriendSet.size);
  }

  console.log(maxTwoFriends);
});
