import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {TitleStyles} from '../sign-in/sign-in.styles';
import {SignUpStyles} from './sign-up.styles.jsx';

const SignUp = () => {

    const[userDetails, setDetails] = useState({ 
        displayName: '', 
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} =  await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, displayName);

            setDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch(error){
            console.error(error);
        }

    }

    const handleChange =  event => {
        const {name,value} = event.target;

        setDetails({[name]: value});
    }
        return(
            <SignUpStyles>
                <TitleStyles>I do no have an account</TitleStyles>
                <span>Sign up with you email and password</span>
                <form className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' onClick={handleSubmit}>Sign Up</CustomButton>
                </form>
            </SignUpStyles>
        );
}

export default SignUp;