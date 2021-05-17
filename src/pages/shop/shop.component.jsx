import React, { useEffect } from 'react';

import {Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

import CollectionsPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';


const ShopPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCollectionsStartAsync())
    }, []);

    const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionsPageContainer}
                />
            </div>
        );
}


export default ShopPage;