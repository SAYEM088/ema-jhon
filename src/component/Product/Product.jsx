import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img,name ,seller ,ratings ,price,id}=props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <h5 className='productname'>{name}</h5>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings}</p>
           </div>
           <button onClick={() =>handleAddToCart (id)} className='btn-cart'>
            Add to Cart 
             <FontAwesomeIcon icon= {faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;