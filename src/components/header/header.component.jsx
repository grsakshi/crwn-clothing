import React from 'react';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { useSelector } from 'react-redux'; // higher order component which takes component and returns level up component

import {LogoContainer, HeaderContainer, OptionLink, OptionsContainer} from './header.styles';

const currentUser = useSelector(state => state.user.currentUser);
const hidden = useSelector(state => state.cart.hidden);

const Header = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser? 
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> 
                : 
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown />
        }
    </HeaderContainer>
);


export default Header;