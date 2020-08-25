const numbers = process.argv.slice(2);
for (let num of numbers) {
  num = Number(num);
  if (num > 0 && !isNaN(num)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}

