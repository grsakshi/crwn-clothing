import React from 'react';

import { useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component'; 

import {CollectionOverviewStyles} from './collections-overview.styles.jsx';

const collections = useSelector(state => state.collections ? Object.keys(collections).map(key => collections[key]) : []);

const CollectionOverview = ({collections}) => (
    <CollectionOverviewStyles>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionOverviewStyles>
);


export default CollectionOverview;

