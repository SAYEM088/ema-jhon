import React from 'react';
import './Cart.css'
const Cart = ({Cart}) => {
    // const cart =props.cart;
    // const {cart}= props;
    console.log(Cart);
    let totalPrice = 0;
    let totalShipping =0;
    for (const product of Cart){
        totalPrice =totalPrice + product.price;
        totalShipping =totalShipping + product.shipping
    }
    const tax = totalPrice *7 /100;
    const grandTotal = totalPrice + totalShipping + tax ;
    return (
        <div className='cart'>
             <h2>Order Summery</h2>
                <p>Selected Items : <b> {Cart.length}</b></p>
                <p>Total Price : <b> $ {totalPrice}</b></p>
                <p>Total Shipping: <b> $ {totalShipping}</b></p>
                <p>Tax: <b> $ {tax.toFixed(2)}</b></p>
               <h5>Grand Total: <b> $ {grandTotal.toFixed(2)}</b></h5>
        </div>
    );
};

export default Cart;