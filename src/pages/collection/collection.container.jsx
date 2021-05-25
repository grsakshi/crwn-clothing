import {useSelector} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const isLoading = useSelector((state) => !(!!state.shop.collections));


const CollectionsPageContainer = WithSpinner(CollectionPage, {isLoading});

export default CollectionsPageContainer;