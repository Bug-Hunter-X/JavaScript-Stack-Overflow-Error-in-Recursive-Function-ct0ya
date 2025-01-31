# JavaScript Stack Overflow Bug

This repository demonstrates a common JavaScript error: a stack overflow caused by unbounded recursion in a recursive function.

## The Bug

The `bug.js` file contains a recursive function, `foo`, that compares two numbers, `a` and `b`. If `b` is significantly larger than `a`, the function will call itself repeatedly until it exceeds the maximum call stack size, resulting in a stack overflow error.

## The Solution

The `bugSolution.js` file provides a corrected version of the function that includes an additional base case to handle large differences between `a` and `b`, preventing the stack overflow.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in your preferred JavaScript environment.
3. Run the code.
4. Observe the stack overflow error (for values of b sufficiently larger than a).

## How to Fix

1. Refer to `bugSolution.js` for the corrected code.
2. Implement appropriate base cases to prevent unbounded recursion in your own recursive functions.

## Lessons Learned

- Always carefully consider base cases when writing recursive functions to prevent stack overflow errors.
- Be mindful of the potential for unbounded recursion in situations where the input may cause the function to call itself without approaching a terminating condition.