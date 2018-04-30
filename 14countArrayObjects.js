/*

  - Complete the function in the editor. It has one parameter: an array, (a), of objects. 
  - Each object in the array has two integer properties denoted by x and y. 
  - The function must return a count of all such objects (o) in array (a) that satisfy o.x == o.y.
  - Return a count of the total number of objects 'o' satisfying o.x == o.y.

  - Parameter(s):
  - objects: an array of objects with integer properties 'x' and 'y'
 */

 
function getCount(objects) {
    let count = 0;
    
    for(let i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
}