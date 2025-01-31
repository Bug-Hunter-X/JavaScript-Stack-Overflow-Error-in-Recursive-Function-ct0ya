function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else if (b - a > 1000) { // Add a base case to handle large differences
    return false; // Or handle it appropriately based on your needs
  } else { 
    return foo(a + 1, b); 
  }
}

console.log(foo(5, 10)); //This will now run without any errors.