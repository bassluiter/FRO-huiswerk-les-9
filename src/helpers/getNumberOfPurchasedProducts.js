
function getNumberOfPurchasedProducts(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].originalStock;
    }
    return total;
}

export default getNumberOfPurchasedProducts;