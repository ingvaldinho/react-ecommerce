import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart,addItem,decreaseItem} from '../../redux/cart/cart.actions'
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({cartItem,clearItem,addItem,decreaseItem})=>{ 
    const {imageUrl,price,name,quantity} = cartItem;
return (
  <CheckoutItemContainer>
  <ImageContainer>
    <img src={imageUrl} alt='item' />
  </ImageContainer>
  <TextContainer>{name}</TextContainer>
  <QuantityContainer>
    <div onClick={() => decreaseItem(cartItem)}>&#10094;</div>
    <span>{quantity}</span>
    <div onClick={() => addItem(cartItem)}>&#10095;</div>
  </QuantityContainer>
  <TextContainer>{price}</TextContainer>
  <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
    &#10005;
  </RemoveButtonContainer>
</CheckoutItemContainer>
)}

const mapDispachToProps = dispach=>({
    clearItem: item => dispach(clearItemFromCart(item)),
    decreaseItem: item => dispach(decreaseItem(item)),
    addItem: item => dispach(addItem(item))
    
})

export default connect(null,mapDispachToProps)(CheckoutItem);