import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectIsCollectionIsLoaded} from '../../redux/shop/shop.selector';

import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionIsLoaded(state)
})

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;