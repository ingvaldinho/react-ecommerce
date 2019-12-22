import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';



import {CartDropdownContainer,EmptyMessageContainer,CartItemContainer,CartDropDownButton} from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems,history, dispatch})=>(
    <CartDropdownContainer>
        <CartItemContainer>
        {
            cartItems.length?
            (cartItems.map(item=> <CartItem  key={item.id} item={item} />)
        ):
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    
        }

        </CartItemContainer>
        <CartDropDownButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        
        }} >CHECKOUT PAGE </CartDropDownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown)) ;
