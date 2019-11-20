import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,inverted,isGoogleSignIn ,...otherButtonProps})=>(
    <button className={ `${inverted ? 'inverted': '' }
    ${isGoogleSignIn ? 'google-signin': '' } custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;