// 1. Write a function that returns the reverse of the list that is passed to it as an argument
// 
// 2. Reverse a list in place (modify the original list)
// 
// 3. Do testing for all that shiz
// (Second one should store as few variables as possible)

function reverseList(a) {
    let newReversed = a.slice().reverse();

    return newReversed;
}


function reverseInPlace(a) {
    return a.reverse();
}