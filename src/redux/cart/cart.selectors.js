    import {createSelector} from 'reselect';


    const selectCar = state => state.cart;

    export const selectCartItems = createSelector(
        [selectCar],
        (cart)=> cart.cartItems
    )

    export const selectCartItemsCount = createSelector(
        [selectCartItems],
        (cartItems)=> cartItems.reduce((accumlatedQuantity,cartItem)=>
        accumlatedQuantity + cartItem.quantity
    ,0)
    )