import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import {selectIsCollectionIsLoaded} from '../../redux/shop/shop.selector'

import CollectionOverviewContainer from '../../component/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';



class ShopPage extends React.Component{ 



    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();

    }

    render(){ 
        const {match} = this.props;
        return(

        <div className='shop-page'>
            <Route exact path={`${match.path}`}  component={CollectionOverviewContainer }  />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync()) 
})


export default connect(null,mapDispatchToProps)(ShopPage);