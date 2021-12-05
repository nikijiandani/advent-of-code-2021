const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const array = data.split("\n");
  let x = 0;
  let y = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length !== 0) {
      const instruction = array[i].split(" ")[0];
      const value = parseInt(array[i].split(" ")[1], 10);
      console.log({ instruction });
      console.log({ value });

      if (instruction === 'forward') {
        x += value;
      } else if (instruction === 'down') {
        y += value;
      } else {
        y -= value;
      }
    }
  }
  console.log("Answer: ", x * y);
})