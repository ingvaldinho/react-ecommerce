import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';

import {DirectoryMenuContainer} from './menu-directory.styles'
import MenuItem from '../menu-item/menu-item.component';

const MenuDirectory = ({sections})=>{

return(
 <DirectoryMenuContainer>
    {
      sections.map(

      ({id, ...othersSectionProps}) => (
      
        <MenuItem key={id} {...othersSectionProps} />                    
      )   
                
      )
}
</DirectoryMenuContainer>
)}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(MenuDirectory);