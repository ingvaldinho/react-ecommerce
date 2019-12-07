import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    PriceContainer,
    NameContainer

} from './collection-item.styles'

const ItemCollection = ({item,addItem})=>{
const {imageUrl,name,price} = item;
return(
    
    <CollectionItemContainer>
        <BackgroundImage   imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick={()=> addItem(item)}>Add To cart</AddButton>
    </CollectionItemContainer>
)}

const mapDispachToProps = dispach =>({
    addItem: item => dispach(addItem(item))
})


export default connect(null,mapDispachToProps)(ItemCollection);