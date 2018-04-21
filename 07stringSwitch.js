/*
Write a function that has one parameter: a string, S, consisting of lowercase English alphabetic letters 
(i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string S is in the set ['a','e','i','o','u'], then return A.
If the first character in string S is in the set ['b','c','d','f','g'], then return B.
If the first character in string S is in the set ['h','j','k','l','m'], then return C.
If the first character in string S is in the set ['n','p','q','r','s','t','v','w','x','y','z'], then return D.
*/

function getLetter(s) {
    let letter;
    var mySet1 = new Set(['a','e','i','o','u'])
    var mySet2 = new Set(['b','c','d','f','g'])
    var mySet3 = new Set(['h','j','k','l','m'])
    
    switch(true) {
        case mySet1.has(s[0]): //JS treats strings like arrays, so can access the first letter by calling s[0]
            letter = 'A';
            break;
        case mySet2.has(s[0]):
            letter = 'B';
            break;
        case mySet3.has(s[0]):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}