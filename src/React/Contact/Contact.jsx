import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox';
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact</h1>
            <UniversalForm>
                <Input 
                    label='Name'
                    id='name'
                    placeholder='Your Name'
                />
                <Textarea
                    label='Message'
                    id='message'
                    placeholder='I was wondering about...'
                />
                <SubmitButton>Send Email</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;