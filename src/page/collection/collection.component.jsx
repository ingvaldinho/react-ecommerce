import React from 'react';
import {connect} from 'react-redux';
import {selectShopCollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss';
import CollectionItemComponent from '../../component/collection-item/collection-item.component';

const CollectionPage = ({collection})=> {
    const {title,items} = collection;
    console.log('COLLECTION', collection);
    return(
        
    <div className='collection-page'>
    <h2 className='title'>{title.toUpperCase()}</h2>
    <div className='items'>
        {
            items.map(
                item=> (<CollectionItemComponent key={item.id} item={item}/>)
                )
        }
    </div>
    </div>
)}

const mapStateToProps = (state,ownProps)=> ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);