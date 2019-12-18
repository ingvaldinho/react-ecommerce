import React from 'react';
import {connect} from 'react-redux';

import FormImput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';
class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {onSignupStart} = this.props;

        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Password and confirm password does\'nt match');
            return;
        }
        
        onSignupStart({email,password,displayName});

    }

    handleChange = (e)=>{
        const {name,value} = e.target;

        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormImput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormImput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormImput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormImput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
        )
    }

}

const mapDispachToProps = dispach=>({
  onSignupStart: (userCredentials)=> dispach(signUpStart(userCredentials))
})

export default connect(null,mapDispachToProps)(SignUp);