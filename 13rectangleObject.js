/*
  - Write a function that takes two paramters (a, b)
  - The function must return an object with the following properties:
        length, value equal to (a)
        width, value equal to (b)
        perimeter, value equal to [2 x (a+b)]
        area, value equal to (a * b)
*/

function Rectangle(a, b) {
    let rectangleObject = new Object();
    rectangleObject.length = a;
    rectangleObject.width = b;
    rectangleObject.perimeter = 2 * (a+b);
    rectangleObject.area = a * b;
    
    return rectangleObject;
}