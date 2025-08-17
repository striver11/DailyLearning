let f2 = [
    'apple_300', 
    'apple_400', 
    'apple_500', 
    'banana_300', 
    'banana_400', 
    'orange_300'
];

// Function to get fruits matching all given prices
function fruitsWithPrices(priceList) {
    let fruitPrices = new Map(); // fruit → Set(prices)

    // Build fruit → prices map
    for (let entry of f2) {
        let [fruit, price] = entry.split("_");
        if (!fruitPrices.has(fruit)) {
            fruitPrices.set(fruit, new Set());
        }
        fruitPrices.get(fruit).add(price);
    }

    console.log(fruitPrices)

    let result = [];

    // Check if fruit has all prices in priceList
    for (let [fruit, prices] of fruitPrices) {
        let hasAllPrices = priceList.every(p => prices.has(p));
        if (hasAllPrices) {
            result.push(fruit);
        }
    }

    return result;
}

let price2 = ['300', '400'];
console.log("Price2 fruits:", fruitsWithPrices(price2)); // ["apple", "banana"]

let price1 = ['300', '400', '500'];
console.log("Price1 fruits:", fruitsWithPrices(price1)); // ["apple"]
