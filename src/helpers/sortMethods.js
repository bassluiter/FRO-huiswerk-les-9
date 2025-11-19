import {inventory} from "../constants/inventory.js";


function sortByMostSold()   {
    let products = inventory
    console.log("opdracht 3a ")
    let sortBySold = products.sort((a, b) => {
        return b.sold - a.sold
    })
    console.log(sortBySold)
}

export function sortByLowestPrice()   {
    let products = inventory
    let sortByPrice = products.sort((a, b) => {

        return a.price - b.price
    })
    console.log("opdracht 3b ")
    console.log(sortByPrice)
}

export function sortByHighestRefreshRate()   {
    let products = inventory
    let sortByRefreshRate = products.sort((a, b) => {

        return b.refreshRate - a.refreshRate
    })
    console.log("opdracht 3c ")
    console.log(sortByRefreshRate)
}

export function sortByScreenSize()   {
    let products = inventory;
    let sortBySize = products.sort((a, b) => {
        const biggestSizeA = a.availableSizes[a.availableSizes.length - 1];
        const biggestSizeB = b.availableSizes[b.availableSizes.length - 1];
        return biggestSizeB - biggestSizeA;
    })
    console.log("Bonus opdracht 1")
    console.log(sortBySize)
}



export default sortByMostSold