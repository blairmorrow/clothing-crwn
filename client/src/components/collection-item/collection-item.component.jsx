import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { 
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const addItemClickHandler = (item) => dispatch(addItem(item));
    const { name, price, imageUrl } = item;
    
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItemClickHandler(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;