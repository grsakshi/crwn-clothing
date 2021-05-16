import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'react';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !(selectIsCollectionLoaded(state)) //to memoize it
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;