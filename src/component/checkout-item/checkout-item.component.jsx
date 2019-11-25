import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart,addItem,decreaseItem} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem,clearItem,addItem,decreaseItem})=>{ 
    const {imageUrl,price,name,quantity} = cartItem;
return (
   
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
    <div className='arrow' onClick={()=>decreaseItem(cartItem)}>&#10094;</div>
     <span className='value'>{quantity}</span> 
    <div className='arrow' onClick={ ()=> addItem(cartItem)} >&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
  </div>
)}

const mapDispachToProps = dispach=>({
    clearItem: item => dispach(clearItemFromCart(item)),
    decreaseItem: item => dispach(decreaseItem(item)),
    addItem: item => dispach(addItem(item))
    
})

export default connect(null,mapDispachToProps)(CheckoutItem);