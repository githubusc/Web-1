import React from 'react';
import styled from 'styled-components';

import ServiceMenuItem from './ServiceMenuItem';

const ServiceMenu = () => {

    return (
        <ServiceMenuStyled className='ServiceMenu'>
            ServiceMenu
            <ServiceMenuItem />
        </ServiceMenuStyled>
    );
}

export default ServiceMenu;

const ServiceMenuStyled = styled.div`
    
`;