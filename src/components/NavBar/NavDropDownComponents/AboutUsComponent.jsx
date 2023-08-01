

const AboutUsComponent = ({scrollPosition}) => {
    return (
        <div className={`mega-menu fade in ${scrollPosition > 10 ? "mega-menu-scroll fade-in" : ""}`}>
        <div className="menu-content">
        <div className="aboutus-component-divs">
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/about-us">Who We Are</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/history" >Our History</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/athletes" >Our Athletes</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/athlete-development-program" >Athlete Development</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/athlete-development-program" >Programs</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/all-icons" >Our Icons</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/xplrpass" >XPLR Pass</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/approach" >The Approach</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/outdoor-exploration/about-the-explore-fund" >Explore Fund Council</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/sustainability">Sustainability</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/circularity" >Circularity</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/help/returns-policy" >Warranty</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>
                <a className="menu-content-headers" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology">Our Technology</a>
            </h2>
            <div>
                <ul className="component-link-list">
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/vectiv" >VECTIV</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/futurelight" >FUTURELIGHT™</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/thermoball" >ThermoBall Eco</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/flashdry" >FlashDry</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/dryvent" >DryVent</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/innovation/fleece-innovation" >Fleece</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/tka" >TKA</a></li>
                    <li><a className="sale-component-link" href="https://www.thenorthface.com/en-us/about-us/technology-innovation/technology/goose-down-fill" >Goose Down</a></li>
                </ul>
            </div>
        </div>
     </div>
     </div>
     </div>
    )
}

export default AboutUsComponent