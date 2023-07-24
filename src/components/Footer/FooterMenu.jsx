import { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FooterMenu = () => {

    const [expandedColumns, setExpandedColumns] = useState({});

    const handleToggle = (columnTitle) => {
        setExpandedColumns((prevState) => ({
            ...prevState,
            [columnTitle]: !prevState[columnTitle],
          }));
        };
    
        useEffect(() => {
            const handleResize = () => {
              const isDesktop = window.innerWidth >= 1024;
              setExpandedColumns({
                SHOP: isDesktop,
                Help: isDesktop,
                "About TNF": isDesktop,
                Discover: isDesktop,
                Explore: isDesktop
              });
            };
        
            handleResize(); // Set initial state on mount
        
            window.addEventListener('resize', handleResize); // Add event listener for window resize
        
            return () => {
              window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
            };
          }, []);



    return (
        <div className='footerMenu'>
            <div className='footerContainer'>
                <div className='footerMenuColumn'>
                    <div className='dropdown' onClick={() => handleToggle('SHOP')}>
                        SHOP
                        <span><FontAwesomeIcon icon={expandedColumns['SHOP'] ? faChevronUp : faChevronDown}></FontAwesomeIcon></span>
                    </div>
                        <div id='SHOP'>
                            <div className='footerColumnTitle'>
                                <p>SHOP</p>
                            </div>
                            {expandedColumns['SHOP'] && (
                            <div className='footerMenuColumnContent'>
                                <ul className='FMCC-list'>
                                    <li className='FMCC-litag'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/womens'>Women's</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/mens'>Men's</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/kids'>Kids'</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/shop-all/footwear-c747784'>Footwear</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/equipment'>Equipment</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/activity'>By Activity</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/more/gift-card'>Gift Cards</a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className='footerMenuColumn'>
                        <div className='dropdown' onClick={() => handleToggle('Help')}>
                            Help
                            <span><FontAwesomeIcon icon={expandedColumns['Help'] ? faChevronUp : faChevronDown}></FontAwesomeIcon></span>
                        </div>
                        <div id='Help'>
                        <div className='footerColumnTitle'>
                            <p>Help</p>
                            </div>
                            {expandedColumns['Help'] && (
                            <div className='footerMenuColumnContent'>
                                <ul className='FMCC-list'>
                                    <li className='FMCC-litag'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/climbing-c224523/verto-27-backpack-pNF0A52DD#'>Live Chat</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help'>Help Center</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/account/order-history'>Order Status</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/size-charts'>Size Chart</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/returns-policy'>Returns & Warranty</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help'>Contact Us</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.essentialaccessibility.com/the-north-face?utm_source=thenorthfacehomepage&utm_medium=iconlarge&utm_term=eachannelpage&utm_content=header&utm_campaign=thenorthface'>Accessibility Statement</a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className='footerMenuColumn'>
                        <div className='dropdown' onClick={() => handleToggle('About TNF')}>
                            About TNF
                            <span><FontAwesomeIcon icon={expandedColumns['About TNF'] ? faChevronUp : faChevronDown}></FontAwesomeIcon></span>
                        </div>
                        <div id='About-TNF'>
                        <div className='footerColumnTitle'>
                            <p>About TNF</p>
                            </div>
                            {expandedColumns['About TNF'] && (
                            <div className='footerMenuColumnContent'>
                                <ul className='FMCC-list'>
                                    <li className='FMCC-litag'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/about-us'>About Us</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/sustainability'>Sustainability</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthfacerenewed.com/?_gl=1*1l8tlwq*_ga*NTczNjQ4MzgzLjE2ODk3OTQ3MzQ.*_ga_950L7P08N5*MTY5MDMzMjQ1Mi4xMy4xLjE2OTAzMzI3ODUuNTYuMC4w&_ga=2.249891905.692132825.1690327141-573648383.1689794734&_gac=1.26605007.1689794737.Cj0KCQjwk96lBhDHARIsAEKO4xbuR3btVmRHIrnGLJJqJ7xlFCrdNc1NOwSEabqh2StkPKpzfpaWfmoaAhnPEALw_wcB'>TNF Renewed</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/about-us/technology-innovation'>Technology & Innovation</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/approach'>Explore our Stories</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/about-us/athletes'>Athletes</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/about-us/outdoor-exploration/about-the-explore-fund'>Explore Fund</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/about-us/careers'>Careers</a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className='footerMenuColumn'>
                        <div className='dropdown' onClick={() => handleToggle('Discover')}>
                            Discover
                            <span><FontAwesomeIcon icon={expandedColumns['Discover'] ? faChevronUp : faChevronDown}></FontAwesomeIcon></span>
                        </div>
                        <div id="Discover">
                        <div className='footerColumnTitle'>
                            <p>Discover</p>
                            </div>
                            {expandedColumns['Discover'] && (
                            <div className='footerMenuColumnContent'>
                                <ul className='FMCC-list'>
                                    <li className='FMCC-litag'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/bags-and-gear/technical-packs/hike-c224525'>Hiking Backpacks</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/womens/womens-jackets-and-vests/womens-rainwear-c299273'>Women's Rain Jackets</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/mens/mens-jackets-and-vests/mens-rainwear-c299284'>Men's Rain Jackets</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/womens/womens-footwear/womens-trail-run-c213489'>Women's Trail Running Shoes</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/mens/mens-footwear/mens-trail-run-c213281'>Men's Trail Running Shoes</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/bags-and-gear/luggage-and-duffels/rolling-luggage-c224545'>Rolling Diffel Bags</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/womens/womens-jackets-and-vests/womens-windbreakers-c299281'>Women's Windbreakers</a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className='footerMenuColumn'>
                        <div className='dropdown' onClick={() => handleToggle('Explore')}>
                            Explore
                            <span><FontAwesomeIcon icon={expandedColumns['Explore'] ? faChevronUp : faChevronDown}></FontAwesomeIcon></span>
                        </div>
                        <div id="Explore">
                        <div className='footerColumnTitle'>
                            <p>Explore</p>
                            </div>
                            {expandedColumns['Explore'] && (
                            <div className='footerMenuColumnContent'>
                                <ul className='FMCC-list'>
                                    <li className='FMCC-litag'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/xplrpass'>XPLR Pass</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/events'>Events</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://thenorthfacepro.com/en/pro'>TNF Pro Program</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/the-north-face-student-discount-program'>Student Discount</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/the-north-face-military-discount-program'>Military Discount</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/the-north-face-healthcare-workers-discount-program'>Healthcare Worker Discount</a></li>
                                    <li className='FMCC-litag MKFEBG'><a className='FMCC-listItem' href='https://www.thenorthface.com/en-us/help/the-north-face-first-responder-discount-program'>First Responder Discount</a></li>
                                    <li id="apple"><a className='FMCC-listItem' title="" target="" rel="noopener" href="https://smart.link/2qb8pqni8nya2"><img src="https://www.thenorthface.com/content/publish/caas/v1/media/223216/data/6c6952d89d8568fc6277b282c7ec552c/apple-store.svg" loading="lazy" alt="apple store" width={"119px"} height={"40px"}></img></a></li>
                                    <li id="google"><a className='FMCC-listItem' title='' target='' rel='noopener' href='https://smart.link/2qb8pqni8nya2'><img src='https://www.thenorthface.com/content/publish/caas/v1/media/246222/data/bced8703ad9b85238c37474cd089948e/google-play-button-scaled.png' loading='lazy' alt='google play button' width={'119px'} height={'35px'}></img></a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu
