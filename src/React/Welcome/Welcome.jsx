import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube-embed'

import Slideshow from './Slideshow/Slideshow.jsx';
import Staff from './Staff/Staff.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Featured Properties</h1>
            <Slideshow />
            <Tabbed />
            <Staff />
            
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;