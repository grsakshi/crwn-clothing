import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import {SignInStyles, TitleStyles, ButtonStyles} from './sign-in.styles';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ ...userCredentials, email: '', password: ''});
        }
        catch(error){
            console.log(error);
        }
    }

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({ ...userCredentials, [name]: value});
    }
    return(
            <SignInStyles>
                <TitleStyles>I already have an account</TitleStyles>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    <ButtonStyles>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </ButtonStyles>
                </form>
            </SignInStyles>
    );
}

export default SignIn;