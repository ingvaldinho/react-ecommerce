import React, {Component} from 'react';


import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state= {
            "email": '',
            "password":""
        }
    }

   

    handleSubmit= (event)=>{
        event.preventDefault();

        this.setState({'email': '', 'password':''});

    }

    handleChange= (event)=>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Signin with you email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                     value={this.state.email}
                      type="email" required 
                      handleChange={this.handleChange}
                      label="email"
                      />
                    
                    <FormInput name="password" 
                     value={this.state.password}
                     type="password" required 
                     handleChange={this.handleChange}
                     label="password"
                     />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{''}Sign In With Google{''}</CustomButton>


                </form>
            </div>
        )
    }
}

export default SignIn;