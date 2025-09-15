let validateNum = Math.floor(process.argv.slice(2)[0]);
if (isNaN(validateNum)) {
  console.log(`Missing size`);
} else {
  for (let i = 0; i < validateNum; i++) {
    console.log(`X`.repeat(validateNum));
  }
}
