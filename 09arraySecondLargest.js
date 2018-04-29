//Write a function that takes an array of numbers argument, and finds and returns the second largest number in the array

function getSecondLargest(nums) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let nr = +nums[i];
        if (nr > max) {
            secondMax = max; // if the number in the array is larger than the one before it gets moved to the second largest variable
            max = nr; //and that number is now the max variable
        } else if (nr < max && nr > secondMax) {
            secondMax = nr; // OR if the number is not larger than the max, but IS larger than the second max, it now comes second
        }
    }

    return secondMax;
}