/*
    First lets recap on LEXICAL SCOPING, which describes how parsers resolve variable names within
    nested functions. Lexical scoping uses the LOCATION that a variable is declared in the code to 
    determine where that variable is made available.
    NESTED FUNCTIONS have access to variables declared in their OUTER SCOPE .e.g. :
*/

function logName() {
    let name = "Virtual Studio";  //name is a local variable created by logName()
    function displayName() {      //displayName is the inner function, a CLOSURE
        console.log(name);        //uses the variable delared in the parent function
    }
    displayName();
}

logName();

//Output-> 'Virtual Studio'

/*
    The displayName() function has no local variables declared in its scope, however it does have access to
    the variables of outer functions. If a variable NAME was declared in the displayName() scope it would
    use that instead


    Functions in JS can form CLOSURES, they are the combination of a function and the LEXICAL ENVIRONMENT in
    which it was declared. This environment consists of any local variables that were in scope at the time of
    the CLOSURES creation
    Consider the function below:
*/

function adderMachine(x) {      //the function takes a single argument (x)
    return function(y) {        //it returns a nested function with a single argument (y)
        return x + y;           //the nested function returns the sum of (x) and (y)
    };
}

let add5 = adderMachine(5);
let add10 = adderMachine(10);

console.log(add5(2));
console.log(add10(24));

//Output-> Line 1: 7, line 2: 34

/*
    In the function above, it acts as a function creator, creating functions that can add a specific value
    to their given argument. In this code, add5() and add10() are both CLOSURES. They share the same function
    body, but store different lexical environments. In add5()'s lexical environment, (x) is 5, whereas in 
    add10()'s lexical environment (x) is 10.

    Another example of Closures working:
*/

function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter += 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
const count1 = increment();
const count2 = increment();
const count3 = increment();

console.log(count1, count2, count3);

//Output -> 1 2 3

/*
    Perhaps looking at that code above you'd expect it to log 1, 1, 1. But it logs 1, 2, 3. Somehow the
    increment function REMEMBERS the counter variable value. How?

    Whenever you declare a new function and assign it to a variable, the function definition is stored, as
    WELL AS A CLOSURE. As stated above the CLOSURE contains all the variables that are in scope at the time
    of the functions creation.

    - count1, the function increment() is called, it has the createCounter() definition as well as the variables
      it looks for a variable 'counter' in the closure and there is one there, set to 0. the increment code runs

    - count2, the steps above are repeted but this time when the closure is checked, it now has a value of 1!
      so it gets incremented and stored again

    - count3, the steps above repeat but now the closure has a variable 'counter' with a value of 2! so it is
      incremented and stored again.
*/


/*
    - THE PRACTICALITY OF CLOSURES -

    Closures are handy as they let you associate some data (the lexical environment), with a function that
    operates on that data. 
    Situations where this idea is used are quite common in FRONTEND JAVASCRIPT DEVELOPMENT.

    The JS code in front-end is generally event-based (triggered by the user), being attached as a CALLBACK
    to a click or a keypress. (A single callback function is is executed in response to the event)
*/


