import React from 'react';
import {withRouter} from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {CartDropdownStyle, CartItemsStyle, EmptyMessage, Button} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));