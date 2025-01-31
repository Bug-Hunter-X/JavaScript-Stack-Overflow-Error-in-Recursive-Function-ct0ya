function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else { 
    return foo(a + 1, b); 
  }
}

console.log(foo(5, 10)); //This will result in a maximum call stack size exceeded error if b is significantly larger than a. Because it recursively calls itself until a becomes greater than or equal to b, the stack will grow until it exceeds the maximum size. The condition `a === b` only handles the case where a and b are equal, but not when b is much larger than a. This is because of stack overflow.