import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Main from './Main';

const Light = ({title, modalContent}) => {

    return (
        <LightStyled className='Light'>
            <Header title={title} />
            <Main modalContent={modalContent}/> 
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 1001;

    background-color: white;
    width: 300px;
    height: auto;
`;