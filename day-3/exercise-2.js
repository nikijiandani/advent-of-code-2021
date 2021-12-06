const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const arr = data.split("\n");
  let oArr = [...arr];
  let cArr = [...arr];

  let oxygenRating;
  let carbonRating;

  // For Oxygen rating
  let i = 0;
  const lengthOfEachItem = arr[0].length
  while (oArr.length > 1 && i <= arr[1].length) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let j = 0; j < oArr.length; j++) {
      // find the most common bit value
      // if both are same, then keep values with 1
      if (oArr[j][i] === '0') {
        zeroCount++;
      } else if (oArr[j][i] === '1') {
        oneCount++;
      } else {
        continue;
      }
    }
    if (zeroCount > oneCount) {
      // keep all values starting with 0
      oArr = oArr.filter(item => item[i] === '0')
    } else if ((oneCount === zeroCount) || (oneCount > zeroCount)) {
      // keep all values starting with 1
      oArr = oArr.filter(item => item[i] === '1')
    }
    i++;
  }
  console.log({ oArr })

  // For carbon rating
  let a = 0;
  while (cArr.length > 1 && a <= arr[1].length) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let b = 0; b < cArr.length; b++) {
      // find the least common bit value
      // if both are same, then keep values with 1
      if (cArr[b][a] === '0') {
        zeroCount++;
      } else if (cArr[b][a] === '1') {
        oneCount++;
      } else {
        continue;
      }
    }
    if (oneCount < zeroCount) {
      // keep all values starting with 1
      cArr = cArr.filter(item => item[a] === '1')
    } else if ((oneCount === zeroCount) || (oneCount > zeroCount)) {
      // keep all values starting with 1
      cArr = cArr.filter(item => item[a] === '0')
    }
    a++;
  }
  console.log({ cArr })
  const answer = parseInt(oArr[0], 2) * parseInt(cArr[0], 2)
  console.log({ answer })
})