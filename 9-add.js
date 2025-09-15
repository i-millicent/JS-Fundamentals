let validateNum = process.argv.slice(2);

function add(a, b) {
  console.log(a + b);
}

add(parseFloat(validateNum[0]), parseFloat(validateNum[1]));
