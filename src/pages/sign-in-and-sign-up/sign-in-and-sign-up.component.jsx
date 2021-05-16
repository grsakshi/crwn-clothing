import React from 'react';
import {SignInAndSignUpStyles} from './sign-in-and-sign-up.styles.jsx';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpStyles>
        <SignIn />
        <SignUp />
    </SignInAndSignUpStyles>
);

export default SignInAndSignUpPage;