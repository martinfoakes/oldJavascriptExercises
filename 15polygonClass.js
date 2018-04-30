/*
Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
*/

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.arr.length; i++) {
            perimeter += this.arr[i];
        }
        return perimeter;
    }
}