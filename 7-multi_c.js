let validateNum = Math.floor(process.argv.slice(2)[0]);
if (isNaN(validateNum)) {
  console.log(`Missing number of occurrences`);
} else {
  for (let i = 0; i < validateNum; i++) {
    console.log(`C is fun`);
  }
}
