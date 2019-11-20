import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const ItemCollection = ({item,addItem})=>(
    <div className="collection-item">
        <div className='image'
              style={{
                backgroundImage: `url(${item.imageUrl})`
            }} 
        />
        <div className="collection-footer">
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton inverted onClick={()=> addItem(item)}>Add To cart</CustomButton>
    </div>
)

const mapDispachToProps = dispach =>({
    addItem: item => dispach(addItem(item))
})


export default connect(null,mapDispachToProps)(ItemCollection);