import React from 'react';
import './Cart.css'
const Cart = ({Cart}) => {
    // const cart =props.cart;
    // const {cart}= props;
    // console.log(Cart);
    let totalPrice = 0;
    let totalShipping =0;
    let  quantity = 0;
    for (const product of Cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        totalPrice =totalPrice + product.price * product.quantity;
        totalShipping =totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice *7 /100;
    const grandTotal = totalPrice + totalShipping + tax ;
    const clearCart=()=>{
        localStorage.removeItem('shopping-cart');
        location.reload();
    }
    return (
        <div className='cart'>
             <h2>Order Summery</h2>
                <p>Selected Items : <b> {quantity}</b></p>
                <p>Total Price : <b> $ {totalPrice}</b></p>
                <p>Total Shipping: <b> $ {totalShipping}</b></p>
                <p>Tax: <b> $ {tax.toFixed(2)}</b></p>
               <h5>Grand Total: <b> $ {grandTotal.toFixed(2)}</b></h5>
               <button className='clearCart'onClick={()=>clearCart()} >Clear Cart</button>
               <p className='visitpro'>visit my profile s@m</p>
        </div>
    );
};

export default Cart;