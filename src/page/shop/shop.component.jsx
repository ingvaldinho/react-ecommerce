import React from 'react';
import {Route} from 'react-router-dom';


import CollectionsOverviewComponent from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match})=>{ 
    console.log(match.path)
    return (

<div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
</div>
)}


export default ShopPage;