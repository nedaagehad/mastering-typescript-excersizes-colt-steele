// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: Array<number> = []

ages[0] = 1
ages[1] = 5
ages[3] = 3

console.log(ages)

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = []

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string;
    price: number;
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
    return products.reduce((prevValue, currentProduct) => prevValue + currentProduct.price, 0)
}

const products: Product[] = [{
    name: "mug",
    price: 13
}, {
    name: "table",
    price: 100
}, {
    name: "pen",
    price: 1
}]

console.log(getTotal(products))
