import {connect} from 'react-redux';

import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionOverView from './collections-overview.component';
import {createStructuredSelector} from 'reselect';
import {selectIsFetching} from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverView));

export default CollectionOverViewContainer;