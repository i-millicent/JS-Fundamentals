let validateNum = Math.floor(process.argv.slice(2)[0]);
//console.log(validateNum);

if (isNaN(validateNum)) {
  console.log(`Not a number`);
} else {
  console.log(`My number: ${validateNum}`);
}
