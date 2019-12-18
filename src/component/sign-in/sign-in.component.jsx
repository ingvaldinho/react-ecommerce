import React, {Component} from 'react';
import {connect} from 'react-redux';


import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
  
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state= {
            "email": '',
            "password":""
        }
    }

   

    handleSubmit= async (event)=>{
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email,password} = this.state;

        emailSignInStart(email,password);


    }

    handleChange= (event)=>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    }

    render() {
      const {onGoogleSignInStart} = this.props;
        return (
          <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
              <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton type='button' onClick={onGoogleSignInStart} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </ButtonsBarContainer>
            </form>
          </SignInContainer>
        );
      }
}

const mapDispachToProps = dispach => ({
  onGoogleSignInStart: ()=>dispach(googleSignInStart()),
  emailSignInStart: (email,password)=> dispach(emailSignInStart({email,password}))
})

export default connect(null,mapDispachToProps)(SignIn);