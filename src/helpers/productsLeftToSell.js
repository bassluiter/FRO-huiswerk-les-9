import getSoldTvAmount from './getSoldTvAmount.js';
import getNumberOfPurchasedProducts from './getNumberOfPurchasedProducts.js';

function productsLeftToSell(inventory) {

    return getNumberOfPurchasedProducts(inventory) - getSoldTvAmount(inventory);
}

export default productsLeftToSell;