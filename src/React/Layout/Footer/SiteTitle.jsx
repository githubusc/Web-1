import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>The Beverly Hills Estates</h2>
            <div className='contact'><a href='https://www.google.com/maps/dir//8878+Sunset+Blvd,+West+Hollywood,+CA+90069' className='contact'>8878 Sunset Blvd, West Hollywood, CA 90069</a></div>
            <div className='contact'><a href='tel:3106264248' className='contact'>310.626.4248</a> | <a href='mailto:info@thebeverlyhillsestates.com' className='contact'>info@thebeverlyhillsestates.com</a></div>
            <div className='copyright'>&copy; 2022 All rights reserved.</div>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    h2 {
        margin: 5px 0px;
        font-size: 14px;
        color: rgb(233,202,126);
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .copyright {
        font-size: 14px;
        color: rgb(233,202,126);
    }
    .contact {
        font-size: 14px;
        color: rgb(233,202,126);
    }
`;