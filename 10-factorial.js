let n = parseFloat(process.argv.slice(2)[0]);

function fact(n) {
  if (n === 0 || n === 1 || isNaN(n)) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(n));
