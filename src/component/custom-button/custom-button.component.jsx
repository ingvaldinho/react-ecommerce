import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,...otherButtonProps})=>(
    <button className="custom-button" {...otherButtonProps}>
        {children.toUpperCase()}
    </button>
)

export default CustomButton;