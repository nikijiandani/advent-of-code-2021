const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const array = data.split("\n");
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        const a = parseInt(array[i]) + parseInt(array[i + 1]) + parseInt(array[i + 2]);
        const b = parseInt(array[i + 1]) + parseInt(array[i + 2]) + parseInt(array[i + 3]);
        if (b > a) {
            counter++;
        }
    }
    console.log({ counter });
})