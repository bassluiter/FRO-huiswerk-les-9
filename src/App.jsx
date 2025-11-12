import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getSoldTvAmount from './helpers/getSoldTvAmount.js';
import getNumberOfPurchasedProducts from './helpers/getNumberOfPurchasedProducts.js';
import productsLeftToSell from './helpers/productsLeftToSell.js';
import getBestSellingTv, {getBestSellingTvPrice} from "./helpers/getBestSellingTv.js";
import getAvailableScreenSizes from "./helpers/getAvailableScreenSizes.js";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';


function App() {

    return (

   <div className="outer">
    <div className="inner">
        <h1>Tech it easy dashboard</h1>
        <h2>Verkoopoverzicht</h2>
        <div className="salesCards-container">
            <div className="salesCards salesCard1">
                <h5>Aantal verkochte producten</h5>
                <p>{getSoldTvAmount(inventory)}</p>
            </div>

            <div className="salesCards salesCard2">
                <h5>Aantal ingekochte producten</h5>
                <p>{getNumberOfPurchasedProducts(inventory)}</p>
            </div>

            <div className="salesCards salesCard3">
                <h5>Aantal te verkopen producten</h5>
                <p>{productsLeftToSell(inventory)}</p>
            </div>
        </div>

        <h2>Best verkochte tv</h2>
        <div className="product-card">
            <div className="product-img-container">
                <img src={bestSellingTv.sourceImg} alt="tv image"/>
            </div>
            <div className={"product-details-container"}>
                <h6>{getBestSellingTv(bestSellingTv)}</h6>
                <p>{getBestSellingTvPrice(bestSellingTv)}</p>
                <p>{getAvailableScreenSizes(bestSellingTv)}</p>
                <span className="product-spec-container">
                    <img src={checkIcon} alt="check"/> wifi
                    <img src={minusIcon} alt="minus"/> speech
                    <img src={checkIcon} alt="check"/> hdr
                    <img src={checkIcon} alt="check"/> bluetooth
                    <img src={minusIcon} alt="minus"/> ambilight
                </span>
            </div>
        </div>

        <div className="filterBtn-container">
            <button type="button" onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst</button>
            <button type="button" onClick={() => console.log("Goedkoopste eerst")}>Goedkoopste eerst</button>
            <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
        </div>

    </div>

   </div>

)
}

export default App
