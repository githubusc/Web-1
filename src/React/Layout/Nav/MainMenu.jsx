import React from 'react';
import styled, { css }  from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts  ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';


const MainMenu = ({showMenuUpdate}) => {

    // const { media } = useMediaQuery();
    // console.log('media', media);

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' } exact>Home</NavLink>
            <NavLink onClick={ clickHandler } to={ '/services' }>Properties</NavLink>
            <NavLink onClick={ clickHandler } to={ '/contact' }>Contact Us</NavLink>
            <NavLink onClick={ clickHandler } to={ '/login' }>Agent Login</NavLink>
            
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    // display: flex;
    justify-content: center;

    a {
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #004e3b;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        border-radius: 5px;
        
        text-transform: uppercase;
        font-weight: bold;

        &.hover {
            background-color: #e9ca7e;
            color: white;
        }

        &.active {
            color: #e9ca7e;
            text-decoration: underline;
            text-decoration-thickness: 5px;
            //background-color: #AEE6E6;
        }

    }


    @media ${defaultMediaQueries.mdUp} {
        display: flex;
                    justify-content: center;

                    a {
                        display: inline-block;
                        width: 150px;
                        margin: 0px 10px;
                        font-size: 16px;
                        border-radius: 0px;

                    }
    }
`;