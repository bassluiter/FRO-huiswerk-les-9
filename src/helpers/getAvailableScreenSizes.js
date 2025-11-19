import inchesToCm from "./inchesToCm.js";


function getAvailableScreenSizes(bestSellingTv) {
    let screenSizesArray = [];
    let screenSizes = bestSellingTv.availableSizes;
    for (let i = 0; i < screenSizes.length; i++) {

        screenSizesArray.push(`${screenSizes[i]} inch  (${inchesToCm(screenSizes[i])} cm)`) ;
    }
    screenSizesArray = screenSizesArray.join(" | ")
    return screenSizesArray;
}

export default getAvailableScreenSizes;