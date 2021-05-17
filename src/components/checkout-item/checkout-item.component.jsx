import React from 'react';
import {CheckoutItemStyles, ImageContainerStyles, Image, Name, Price, Quantity, Arrow, RemoveButton, Value} from './checkout-item-style'; 

import { useDispatch } from 'react-redux';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <CheckoutItemStyles>
            <ImageContainerStyles>
                <Image src={imageUrl} alt="item"/>
            </ImageContainerStyles>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => dispatch(removeItem(cartItem))}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </Arrow> 
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButton>
        </CheckoutItemStyles>
    )};

export default CheckoutItem;