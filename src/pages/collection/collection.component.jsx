import React from 'react';

import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import {CollectionpageStyles, TitleStyles, ItemStyles, StyledCollectionItem} from './collection.styles.jsx';

const CollectionPage = ({collection}) => {
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
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);