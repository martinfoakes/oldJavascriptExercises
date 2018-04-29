/*
  - Write a function that takes two integer arguments: (l) and (r).
  - Find all of the odd numbers in between and including those two numbers.
  - Print all of those odd numbers into an array

*/

function oddNumbers(l, r) {
    let x= [];                            //Define a variable (x) as an EMPTY ARRAY
    for (let i = l; i <= r; i++) {        //Create a loop that sets it's starting point (i) equal to the value of (l), it's end point less than or equal to (r), and iterate it
        if (i % 2 != 0) {                 // if the remainder of (i) / 2 isn't zero
            x.push(i);                    //then it's odd and that value (i) can be pushed to the empty array (x) 
        }
    }
    return x;                             //return the array (x)
}
