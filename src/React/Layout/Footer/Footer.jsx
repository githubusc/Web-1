import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SiteTitle from './SiteTitle';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <SiteTitle />
            <Logo />
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;
    text-align: center;
    padding: 20px 0px;
`;