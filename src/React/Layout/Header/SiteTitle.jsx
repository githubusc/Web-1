import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>The Beverly Hills Estates</h2>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: #e9ca7e;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }

    h3 {
        margin: 0px;
        font-size: 20px;
    }
    img {
        width: 100%;
    }
`;