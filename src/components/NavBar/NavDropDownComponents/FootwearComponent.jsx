

const FootwearComponent = ({scrollPosition}) => {
    return (
        <div className={`mega-menu fade in ${scrollPosition > 10 ? "mega-menu-scroll fade-in" : ""}`}>
        <div className="menu-content">
        <h2>
            <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/shop-all/footwear-c747784">Shop All Footwear</a>
        </h2>
        <div className="mens-component-divs">
        <div>
            <h2>
                <a className="menu-content-headers" >Featured</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/shop-all/footwear-new-arrivals-c829848" >New Arrivals</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/shop-all/collections/vectiv-c730298" >Vectiv</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/shop-all/collections/summit-series-run-c361274" >Summit Run</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/mens/mens-footwear-c211706">Men's</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-hike-c263751" >Hike</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-trail-run-c213281" >Trail Run</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-boots-c695280" >Boots</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-sneakers-c296771" >Sneakers</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-slippers-c695279" >Slippers</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/mens/mens-footwear/mens-sandals-c313279" >Sandals</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/womens/womens-footwear-c211723">Women's</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-hike-c263752" >Hike</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-trail-run-c213489" >Trail Run</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-boots-c695282" >Boots</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-sneakers-c296772" >Sneakers</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-slippers-c695281" >Slippers</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/womens/womens-footwear/womens-sandals-c313280" >Sandals</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/kids/footwear-c311774">Kids'</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/kids/girls-footwear-c211745" >Girls' Footwear</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/kids/boys-footwear-c211739" >Boys' Footwear</a></li>
                </ul>
            </div>
        </div>
        <a href="https://www.thenorthface.com/en-us/featured/walls">
        <img height={185} width={146} src="https://www.thenorthface.com/content/publish/caas/v1/media/346032/data/7b953f8c3199b8374e8e0fafd821d1d1/230718-global-climbing-day-nav-promo.jpg" />
        </a>
     </div>
     </div>
     </div>
    )
}

export default FootwearComponent