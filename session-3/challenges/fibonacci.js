let fibo = [0, 1];
for (let i = 0; i < 50; i++) {
  console.log(fibo[i]);
  let nextPush = fibo[i] + fibo[i + 1];
  fibo.push(nextPush);
}
console.log(fibo[fibo.length - 2]);
console.log(fibo[fibo.length - 1]);
console.log(fibo);
