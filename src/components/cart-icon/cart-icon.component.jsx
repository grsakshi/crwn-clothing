import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {CartIconStyles, ShoppingIconStyle, ItemCount} from './cart-icon.styles';

const itemCount = useSelector(state => state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
));

const CartIcon = () => {
    const dispatch = useDispatch();
    return(
        <CartIconStyles onClick={dispatch(toggleCartHidden())}>
            <ShoppingIconStyle/>
            <ItemCount>{itemCount}</ItemCount>
        </CartIconStyles>
    )
};

export default CartIcon;

