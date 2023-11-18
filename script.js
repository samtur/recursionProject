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

// console.log(fib(12));

// Fibonacci Recursive

// Fib recursive to array coouldn't figure this out by myself
function fibRec(n) {
  // Base case: if n is 0, return an array with only 0
  if (n === 0) return [0];

  // Base case: if n is 1, return an array with 0 and 1
  if (n === 1) return [0, 1];

  // Recursive case: calculate Fibonacci sequence up to n-1
  const arr = fibRec(n - 1);

  // Add the sum of the last two elements to the array
  return [...arr, arr[n - 1] + arr[n - 2]];
}

// Call the function with n = 12 and log the result
// console.log(fibRec(12));

// Basic fib recursive solution
function fibRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibRec(n - 1) + fibRec(n - 2);
}

// console.log(fibRec(7));
