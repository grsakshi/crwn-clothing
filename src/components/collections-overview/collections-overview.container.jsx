import {useSelector} from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const isLoading = useSelector((state) => state.shop.isFetching);

const CollectionsOverviewContainer = WithSpinner(CollectionOverview, {isLoading});

export default CollectionsOverviewContainer;
