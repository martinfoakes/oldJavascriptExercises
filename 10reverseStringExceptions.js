/*
Complete the reverseString function; it has one parameter, (s). You must perform the following actions:

    - Try to reverse string (s) using the split, reverse, and join methods.
    - If an exception is thrown, catch it and print the contents of the exception's MESSAGE on a new line.
    - Print (s) on a new line. If no exception was thrown, then this should be the reversed string; 
      if an exception was thrown, this should be the original string.
*/

function reverseString(s) {
    try {
        let stringSplit = s.split("");              //Use the split() method to return a new array
        let reverseArray = stringSplit.reverse();   //Use the reverse() method to reverse the new created array
        let joinArray = reverseArray.join("");      //Use the join() method to join all elements of the array into a string
        console.log(joinArray);                     //If no exception is thrown this will print the reversed string
    }
    catch (e) {                                     //if an exception IS thrown it will be caught here,
        console.log(e.message);                     //and log the error message AND the original argument (s)
        console.log(s); 
    }
}

                                                /* OTHER WAYS OF REVERSING A STRING */


//Chain the split(), reverse(), and join() methods together:

function reverseString2(s) {

    return s.split("").reverse().join("");

}

//Reversing a string with a decrementing FOR loop - My Personal Fave

function reverseString3(s) {

    let stringReverse = "";                     //created a new variable that is an empty string

    for (let i = s.length - 1; i >= 0; i--) {   //create a FOR loop that begins at string.length minus 1, or, the last character of the string
        stringReverse += s[i];                  //for every index position (string character) looped through add it to the new empty string variable
    }

    return stringReverse;                       //for loop ends at position 0, and finally return the new reversed string

}

//Reversing a string using RECURSION

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString("hello");




