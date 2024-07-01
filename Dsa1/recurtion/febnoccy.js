function fib(n) {                   //O(n)
    if (n < 2) return n;              //O(1)
    return fib(n - 1) + fib(n - 2);   //O(n-1) + O(n-2) 
  }
  
  console.log(fib(1));
  console.log(fib(2));
  console.log(fib(3));
  console.log(fib(4));
  console.log(fib(5));
  console.log(fib(6));
  console.log(fib(7));
  console.log(fib(8));