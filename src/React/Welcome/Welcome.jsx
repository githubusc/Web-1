import React from 'react';
import styled from 'styled-components';

import Staff from './Staff/Staff.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome</h1>
            <Tabbed />
            <Staff />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;