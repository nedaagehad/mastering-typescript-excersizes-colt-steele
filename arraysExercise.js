// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
ages[0] = 1;
ages[1] = 5;
ages[3] = 3;
console.log(ages);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    return products.reduce(function (prevValue, currentProduct) { return prevValue + currentProduct.price; }, 0);
}
var products = [{
        name: "mug",
        price: 13
    }, {
        name: "table",
        price: 100
    }, {
        name: "pen",
        price: 1
    }];
console.log(getTotal(products));
