import React from 'react';
import styled from 'styled-components';
import Homework from 'React/Homework/Homework';
const Main = () => {

    return (
        <MainStyled className='Main'>
            Main 
            <Homework />
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    
`;