import React from 'react';

import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        }
    }


    render(){
        const {collections} = this.state;
        console.log(collections);
        return (<div className='shop-page'>
            {
                collections.map(({id, ...othersCollectionProps})=>(
                    <CollectionPreview key={id} {...othersCollectionProps} />
                ))
                
            }

        </div>);
    }
}

export default ShopPage;