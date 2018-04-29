/*

 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"

*/


function isPositive(a) {    
    if (a == 0) {
        throw new Error("Zero Error");        //if the value of (a) is zero, throw an exception with the NEW custom error message
    } else if (a < 0) {
        throw new Error("Negative Error");    //if the value of (a) is negative, throw an exception with the NEW custom error message
    } else {
        return "YES";                         //else if it isn't zero or negative (must be a positive), return YES
    }
}