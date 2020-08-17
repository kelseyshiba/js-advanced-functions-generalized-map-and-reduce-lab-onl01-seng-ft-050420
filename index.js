// Add your functions here
// Array and callback
//map([1, 2, 3, -9], function(a){ return -1 * a }
function map(array, callback) {
   let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
}

//reduce(sourceArray, function(e, memo){return e + memo})
//sourceArray, function(e, memo){return e + memo}, startingPoint)
// [1, 2, 3]
//[1, 2, true, "razmatazz"]
function reduce(array, callback, startingPoint) {
    let memo;
    let i = 0;
    if (startingPoint) { 
        memo = startingPoint 
    } else {
        memo = array[0]
        i = 1
    }

    for (i; i < array.length; i++) {
        memo = callback(array[i], memo)
    } 
    return memo;
}