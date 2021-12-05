const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const array = data.split("\n");
  let position = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== 0) {
      const instruction = array[i].split(" ")[0];
      const value = parseInt(array[i].split(" ")[1], 10);
      console.log({ instruction });
      console.log({ value });

      if (instruction === 'forward') {
        position += value;
        depth = depth + aim * value;
      } else if (instruction === 'down') {
        aim += value;
      } else {
        aim -= value;
      }
    }
  }
  console.log("Answer: ", position * depth);
})