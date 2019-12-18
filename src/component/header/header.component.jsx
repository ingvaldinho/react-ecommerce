import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signoutStart} from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import {HeaderContainer,LogoContainer,OptionContainer,OptionLink,OptionDiv} from './header.styles';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser,hidden,signoutStart})=>(
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo className="logo"/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionDiv  onClick={signoutStart}>  SIGN OUT </OptionDiv>
                 ) :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionContainer>
        {            
            hidden?null : <CartDropdown/>            
        }

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispachToProps = dispach =>({
    signoutStart: ()=> dispach(signoutStart())
})
export default connect(mapStateToProps,mapDispachToProps)(Header);