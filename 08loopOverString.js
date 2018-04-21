/*

Write a function that loops over the characters in a given String argument. 

The function must print all the vowels in the string FIRST on a new line. 

Next it must print all the consonants in the string on a new line below.

*/

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for (var i = 0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n'; // \n adds a new line to the string output
        }
    }
    
    console.log(consonants.trim()); //Trims the whitespace off of the consonants string
}