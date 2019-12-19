import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormImput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';
const SignUp = ({onSignupStart})=>{

  const [userCredentials,setUserCredentials] = useState({
         displayName: '',
            email:'',
            password:'',
            confirmPassword:''
  })

  const {displayName,email,password,confirmPassword} = userCredentials;


    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Password and confirm password does\'nt match');
            return;
        }
        
        onSignupStart({email,password,displayName});

    }

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setUserCredentials({...userCredentials,[name]:value});
    }


        return (
            <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormImput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormImput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormImput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormImput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
        )
    }



const mapDispachToProps = dispach=>({
  onSignupStart: (userCredentials)=> dispach(signUpStart(userCredentials))
})

export default connect(null,mapDispachToProps)(SignUp);