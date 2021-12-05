const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const array = data.split("\n");
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i + 1], 10) > parseInt(array[i], 10)) {
      counter++;
    }
  }
  console.log({ counter });
})