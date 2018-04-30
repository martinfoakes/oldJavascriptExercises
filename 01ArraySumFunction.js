//Given an array on integers, write a function that finds the sum of its elements

function simpleArraySum(ar) {
    const add = (a, b) =>
    a + b;
    //defining a simple Arrow Function 'add' that takes two numbers and adds them together

    const sum = ar.reduce(add);
    /*
      The reduce() method reduces an array to a single value.

      The reduce() method executes a provided function for each value of the array (from left-to-right).

      The return value of the function is stored in an accumulator (result/total).

      Execute the REDUCE Method on the array argument, give Reduce the function 'add'
      */

    return sum;
}

//This function could also be written like:

function simpleArraySum2(ar) {
    const sum = ar.reduce((total, amount) => total + amount); // Defining the add function within the Reduce method, exactly the same outcome as above

    return sum;
}


//WITHOUT COMMENTS: 

function simpleArraySum(ar) {
  const add = (a, b) =>
  a + b;

  const sum = ar.reduce(add);

  return sum;
}

//OR

function simpleArraySum2(ar) {
  const sum = ar.reduce((total, amount) => total + amount);

  return sum;
}









