const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const array = data.split("\n");
  const gamma = [];
  const epsilon = [];

  for (let i = 0; i < array[0].length; i++) {
    let zeroCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== 0) { // check for emptyline
        if (array[j][i] === '0') {
          zeroCount++;
        }
      }
    }
    if (zeroCount > array.length / 2) {
      gamma.push('0');
      epsilon.push('1');
    } else {
      gamma.push('1');
      epsilon.push('0');
    }
  }

  const answer = parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
  console.log("Answer: ", answer);
})