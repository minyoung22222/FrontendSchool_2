import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'
import React, {useRef, useState } from 'react'



export default function ProductCard({productName, price, thumbnailImg}){

    const Heart = useRef(null);
    // const [heart, setHeart] = useState("") 

    function handleHeart(e) {
        console.log(e);
        // e.preventDefalut();
        e.currentTarget.classList.toggle("on")
        // setHeart(Heart.current);
    }

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className="like-btn" onClick={handleHeart} ref={Heart}>

            </button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
