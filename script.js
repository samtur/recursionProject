// Iterative Approach Fibonacci Sequence
function fib(n) {
  let a = 0;
  let b = 1;
  let c = b + a;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    b = a;
    a = c;
    c = b + a;
    arr.push(b);
  }
  return arr;
}

console.log(fib(12));
