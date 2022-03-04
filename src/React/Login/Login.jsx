import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox';
import UniversalForm, { Input, SubmitButton } from 'React/common/UniversalForm/UniversalForm';

const Login = () => {

    const onSubmitHandler = ({ fields, payload }) => {
        console.log('onSubmit fields, payload', fields, payload);
    }

    return (
        <LoginStyled className='Login'>
            <h1>Login</h1>
            <UniversalForm
                apiUrl='/user/login'
                onSubmit={ onSubmitHandler }
            >
                <Input
                    label='Username'
                    id='username'
                    type='text'
                    placeholder='user@domain.com'
                    rules={ ['required', 'email'] }
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    rules={ ['required'] }
                />
                <SubmitButton>Login</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;