import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CartDropdownStyle = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 0;
    z-index: 5;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsStyle = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
    
export const Button = styled(CustomButton)`
    margin-top: auto;
`;
