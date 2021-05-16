import React from 'react';
import {CheckoutItemStyles, ImageContainerStyles, Image, Name, Price, Quantity, Arrow, RemoveButton, Value} from './checkout-item-style'; 

import { connect } from 'react-redux';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <CheckoutItemStyles>
            <ImageContainerStyles>
                <Image src={imageUrl} alt="item"/>
            </ImageContainerStyles>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItem(cartItem)}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItem(cartItem)}>
                    &#10095;
                </Arrow> 
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemStyles>
    )};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);