/*
THE PROBLEM: 

A reviewer rates two contest entries (from Jane and Steve), awarding points on a scale from 1 to 100 for three categories: 
    
    Problem Clarity, Originality, and Difficulty.

We define the rating for Jane's challenge to be the triplet A = (a[0], a[1], a[2]), 
and the rating for Steve's challenge to be the triplet B = (b[0], b[1], b[2])

Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Jane is awarded 1 point.
If a[i] < b[i], then Steve is awarded 1 point.
If a[i] === b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given A and B, can you compare the two challenges and print their respective comparison points?

*/

function solve(a0, a1, a2, b0, b1, b2) {
    let jane = ( a0 > b0 ? 1 : 0 ) + ( a1 > b1 ? 1 : 0 ) + ( a2 > b2 ? 1 : 0 );
    
// IF/ELSE statements above and below using the ternary operator [?]. IF Alice's values of [a] are bigger than [b] then she gets 1 point and the reverse for Steve

    let steve = ( a0 < b0 ? 1 : 0 ) + ( a1 < b1 ? 1 : 0 ) + ( a2 < b2 ? 1 : 0 );

    return [jane, steve];
}