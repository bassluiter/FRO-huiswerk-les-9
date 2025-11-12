
function getBestSellingTv(bestSelling) {
    return `${bestSelling.brand} ${bestSelling.type} - ${bestSelling.name}`
}

export function getBestSellingTvPrice(bestSellingTv) {
    return `€${bestSellingTv.price},-`
}


export default getBestSellingTv;