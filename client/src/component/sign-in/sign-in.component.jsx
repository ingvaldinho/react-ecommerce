import React, {useState} from 'react';
import {connect} from 'react-redux';


import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
  
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';


const SignIn = ({emailSignInStart,googleSignInStart})=>{
    const [userCredentials,setUserCredentials] = useState({email:'',password:''})

    const {email,password} = userCredentials;


    const handleSubmit= async (event)=>{
        event.preventDefault();

        emailSignInStart(email,password);


    }

    const handleChange= (event)=>{
        const {name,value} = event.target;

        setUserCredentials({...userCredentials,[name]:value});
    }


        return (
          <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required
              />
              <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </ButtonsBarContainer>
            </form>
          </SignInContainer>
        );
      }


const mapDispachToProps = dispach => ({
  googleSignInStart: ()=>dispach(googleSignInStart()),
  emailSignInStart: (email,password)=> dispach(emailSignInStart({email,password}))
})

export default connect(null,mapDispachToProps)(SignIn);