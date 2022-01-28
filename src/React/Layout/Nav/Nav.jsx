import React from 'react';
import styled from 'styled-components';

import MainMenu from './MainMenu';
const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <MainMenu />
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    
`;