import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';

import './menu-directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const MenuDirectory = ({sections})=>(
 <div className="directory-menu">
            {
                sections.map(

                 ({id, ...othersSectionProps}) => (
                    <MenuItem key={id} {...othersSectionProps} / >                    
                 )   
 
                
                )
            }
        </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(MenuDirectory);