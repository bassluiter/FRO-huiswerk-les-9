import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import getSoldTvAmount from './helpers/getSoldTvAmount.js';
import getNumberOfPurchasedProducts from './helpers/getNumberOfPurchasedProducts.js';
import productsLeftToSell from './helpers/productsLeftToSell.js';
import getBestSellingTv, {getBestSellingTvPrice} from "./helpers/getBestSellingTv.js";
import getAvailableScreenSizes from "./helpers/getAvailableScreenSizes.js";
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import outOfStock from './assets/out-of-stock.png'
import methods from "./constants/practice.js";
import sortByMostSold, {sortByLowestPrice, sortByHighestRefreshRate, sortByScreenSize} from "./helpers/sortMethods.js";


function App() {

    methods()
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

                <h2>Alle tv 's</h2>
                <div className="filterBtn-container">
                    <button type="button" onClick={() => sortByMostSold()}>Meest verkocht</button>
                    <button type="button" onClick={() => sortByLowestPrice()}>Goedkoopste</button>
                    <button type="button" onClick={() => sortByHighestRefreshRate()}>Meest geschikt voor sport</button>
                    <button type="button" onClick={() => sortByScreenSize()}>Grootste schermgrootte</button>
                </div>
                {/*opfracht 2*/}
                {/*<ol>*/}
                {/*    {inventory.map((tv) => {*/}
                {/*        return <li key={tv.type}>{tv.brand}</li>*/}
                {/*            })*/}
                {/*    }*/}
                {/*</ol>*/}
                <section className={'product-list-section'}>
                    {inventory.map((tv) => (
                        <div key={tv.type} className="product-card product-card-list">
                            <div className="product-img-container">
                                <img src={tv.sourceImg} alt="tv image"/>
                                <div className={"sold-out"}>
                                    {tv.originalStock - tv.sold <= 0 && (<img src={outOfStock} alt="Uitverkocht" className="sold-out"/>)}
                                </div>

                            </div>
                            <div className="product-details-container product-details-list">
                                <h4>{getBestSellingTv(tv)}</h4>
                                <p>{getBestSellingTvPrice(tv)}</p>
                                <p>{getAvailableScreenSizes(tv)}</p>
                                <ol className={"product-specs"}>
                                    {tv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={option.name}><img src={checkIcon} alt="check"
                                                                              className={"icon"}/> {option.name}</li>
                                        } else {
                                            return <li key={option.name}><img src={minusIcon} alt="check"
                                                                              className={"icon"}/> {option.name}</li>
                                        }
                                    })}
                                </ol>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default App
