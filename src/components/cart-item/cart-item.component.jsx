import React from 'react';

import { 
    CartItemContainer,
    CartItemImage,
    CartItemDetails
} from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetails>
            <span>{name}</span>
            <span>
                {quantity} x ${price}
            </span>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;
