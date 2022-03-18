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
            <UniversalForm
                apiUrl='/user/login'
                onSubmit={ onSubmitHandler }
            >
                <Input
                    label='Username'
                    id='username'
                    type='text'
                    placeholder='user@thebeverlyhillsestates.com'
                    rules={ ['required', 'email'] }
                />
                <Input
                    label='Password'
                    type='password'
                    id='password'
                    rules={ ['required'] } 
                />
                <SubmitButton className='myButton'>Login</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    .myButton {
        color: black;
    }
`;