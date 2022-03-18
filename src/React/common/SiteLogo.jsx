import React from 'react';
import styled from 'styled-components';


//<FontAwesomeIcon icon={ faHotTub } />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <FontAwesomeIcon icon="fa-thin fa-city" className='hot-tub-icon'/>
        </SiteLogoStyled>
        
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    svg.hot-tub-icon {
        width: 100px;
        height: auto;
    }
`;