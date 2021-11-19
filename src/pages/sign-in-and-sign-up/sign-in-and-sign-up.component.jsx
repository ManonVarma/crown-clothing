import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <div className='signin'><SignIn /></div>
            <div className='signup'><SignUp /></div>
            
        </div>
    )
}

export default SignInAndSignUpPage;
