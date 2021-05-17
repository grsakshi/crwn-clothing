import React from 'react';
import {withRouter} from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {useSelector} from 'react-redux';

import {CartDropdownStyle, CartItemsStyle, EmptyMessage, Button} from './cart-dropdown.styles';

const cartItems = useSelector(state => state.cart.cartItems);

const CartDropdown = ({ history, dispatch}) => (
    <CartDropdownStyle>
        <CartItemsStyle>
            {cartItems.length ? 
            (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/> 
            )))
            :
            (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
        </CartItemsStyle>
        {console.log(history)}
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</Button>
    </CartDropdownStyle>
);


export default withRouter(CartDropdown);