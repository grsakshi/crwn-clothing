import React from 'react';

import {useSelector} from 'react-redux';

import {CollectionpageStyles, TitleStyles, ItemStyles, StyledCollectionItem} from './collection.styles.jsx';

const collection = useSelector((state, ownProps) => state.shop.collections ? collections[ownProps.match.params.collectionId] : null);

const CollectionPage = () => {
    const {title, items} = collection;
    return(
        <CollectionpageStyles>
            <TitleStyles>{title}</TitleStyles>
            <ItemStyles>
                {
                    items.map(item => <StyledCollectionItem key={item.id} item={item}/>)
                }
            </ItemStyles>
        </CollectionpageStyles>
    );
}

export default CollectionPage;