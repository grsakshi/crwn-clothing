import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { useDispatch } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = item;
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton className='custom-button' inverted onClick={() => dispatch(addItem(item))}>ADD TO CART</CustomButton>
        </div>
    ); 
}

export default CollectionItem;