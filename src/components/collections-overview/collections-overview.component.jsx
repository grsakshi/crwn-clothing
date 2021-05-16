import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component'; 

import {CollectionOverviewStyles} from './collections-overview.styles.jsx';

const CollectionOverview = ({collections}) => (
    <CollectionOverviewStyles>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionOverviewStyles>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);

