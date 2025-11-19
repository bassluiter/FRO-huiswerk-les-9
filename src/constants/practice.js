import {bestSellingTv, inventory} from './inventory.js';
import getBestSellingTv from "../helpers/getBestSellingTv.js";

// function ProductTypes() {
//     console.log('uitkomst opdracht 1a');
// const tvTypes = inventory.map( (tv) => {
//       return tv.type;
//     })
//     console.log(tvTypes);
//     return tvTypes;
// }

// export function soldOutTV() {
//     console.log('uitkomst opdracht 1b');
//     const soldOut = inventory.filter( (tv) => {
//         const tvStock = tv.originalStock - tv.sold;
//         return tvStock < 1
//     })
//     soldOut.forEach(tv => console.log(tv));
//     return soldOut;
// }

// export function findTv() {
//     console.log('uitkomst opdracht 1c');
//     const findTv = inventory.find( (tv) => {
//
//         if (tv.type === 'NH3216SMART') {
//         console.log(tv.type === 'NH3216SMART')
//         }
//         return tv.type === 'NH3216SMART';
//     })
//     return findTv;
// }


function methods() {

    // 1a
    console.log('uitkomst opdracht 1a');
    const tvTypes = inventory.map( (tv) => {
        return tv.type;
    })
    console.log(tvTypes);

    // 1b
    console.log('uitkomst opdracht 1b');
    const soldOut = inventory.filter( (tv) => {
        const tvStock = tv.originalStock - tv.sold;
        return tvStock < 1
    })
    soldOut.forEach(tv => console.log(tv));

    // 1c
    console.log('uitkomst opdracht 1c');
    const findTv = inventory.find( tv => tv.type === 'NH3216SMART');
    console.log(findTv);

    // 1d
    console.log('uitkomst opdracht 1d');
    const tvAbove100Hz = inventory.map( (tv) => {
        // console.log(`name: ${tv.brand} ${tv.name} , suitable: ${tv.refreshRate >= 100}`);
        return  {
            name: `${tv.brand} ${tv.name}`,
            suitable: tv.refreshRate >= 100
        }
    });
    console.log(tvAbove100Hz)

    // 1e
    console.log('uitkomst opdracht 1e');
    const filterLargeScreens = inventory.filter( (tv) => {
        const isLargeScreen = tv.availableSizes.some(size => size >= 65);
        if (isLargeScreen) {
            console.log(tv)
        }
        return isLargeScreen;
    })
    console.log(filterLargeScreens);

    // 1f
    console.log('uitkomst opdracht 1f');
    const filterHasAmbilight = inventory.filter( (tv) => {
        const hasAmbilight = tv.options.find(option => option.name === "ambiLight" && option.applicable === true);
        // const hasAmbilight = tv.options[4].applicable === true
        return hasAmbilight
    })
    console.log(filterHasAmbilight)


    // 2a
    console.log('uitkomst opdracht 2a');
    const listTvBrands
        = inventory.map( (tv) => {
        return tv.brand
    })
    console.log(listTvBrands);


    // 2b
    console.log('uitkomst opdracht 2b');

    function getAllTvs() {
        return inventory.map(tv => getBestSellingTv(tv));
    }

    // const getAllTvs = inventory.map(tv => getBestSellingTv(tv));
    // console.log(getAllTvs)

    // 2c
    console.log('uitkomst opdracht 2c');
    const getOptionsNames = inventory.map( (tv) => {
        console.log(tv.options.map(option => option.name));
        return tv.options.map( (option) =>  {
            return option.name
        });
    });


    return { tvTypes, soldOut, findTv, tvAbove100Hz , filterLargeScreens, filterHasAmbilight, listTvBrands, getAllTvs, getOptionsNames };
}


export default methods;