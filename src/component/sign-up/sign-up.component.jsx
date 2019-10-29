import React from 'react';

import FormImput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserprofileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

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

        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Password and confirm password does\'nt match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

             await createUserprofileDocument(user,{displayName});

             this.setState({
                displayName: '',
                email:'',
                password:'',
                confirmPassword:''
            });
        } catch (error) {
            console.error(error);
        }
        




    }

    handleChange = (e)=>{
        const {name,value} = e.target;

        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password.</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}  >
                    <FormImput 
                        name="displayName"
                        label="display name"
                        type="text"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormImput
                    name="email"
                    label="email"
                    value={email}
                    type="email"
                    required
                    handleChange={this.handleChange}
                    />
                    <FormImput 
                    name="password"
                    label="password"
                    value={password}
                    type="password"
                    required
                    handleChange={this.handleChange}
                    />
                    <FormImput
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    type="password"
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }

}

export default SignUp;