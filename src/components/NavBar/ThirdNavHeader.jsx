import { useEffect, useState } from "react";

const ThirdNavHeader = () => {
    const [urls, setUrls] = useState([]);
    const productId = 1

    useEffect(() => {
        fetch(`https://southface.onrender.com/ProductImages/${productId}`)
            .then(response => response.json())
            .then(data => {
                const images = data.map(row => row.imageurl);
                setUrls(images);
            })
            .catch(error => console.error('Error:', error));
    }, [productId]);

    return (
        <div className="navbar-third">
            <div className="navbar-third-product">
                <img className="navbar-img" src="https://images.thenorthface.com/is/image/TheNorthFace/NF0A81E6_7ZQ_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0" />
                <div>
                <div>Women's Jester Luxe Backpack</div>
                <div>$80.00</div>
            </div>
        </div>
        <div className="navbar-third-buttons">
            <button className="navbar-third-cartButton">Add to Cart</button>
            <button className="navbar-third-heartButton">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </button>
        </div>
        </div>
    )
}

export default ThirdNavHeader