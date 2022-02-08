import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQuery } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import MainMenu from './MainMenu';
import Hamburger from './Hamburger';
const Nav = () => {

    const { media } = useMediaQuery();
    const [ showMenu, showMenuUpdate ] = useState(false);

    console.log('showMenu', showMenu);
    return (
        
        <NavStyled className='Nav'>
            {
                !media.mdUp &&
                <Hamburger showMenu={ showMenu } showMenuUpdate = { showMenuUpdate }/>
            }

            {
                (media.mdUp || showMenu) &&
                <MainMenu showMenuUpdate={ showMenuUpdate }/>
            }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: rgb(1, 68, 68);
    padding: 20px;
    color: white;
`;