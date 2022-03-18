import React from 'react';
import styled from 'styled-components';

import ServiceMenuItem from './ServiceMenuItem.jsx';

const ServiceMenu = ({locations, chosenLocation, chosenLocationUpdate}) => {

    return (
        <ServiceMenuStyled className='ServiceMenu'>
            {
                locations.map((location, idx) => {
                    return <ServiceMenuItem key={ idx } location={ location } chosenLocation={ chosenLocation } chosenLocationUpdate={ chosenLocationUpdate }/>
                })
            }
        </ServiceMenuStyled>
    );
}

export default ServiceMenu;

const ServiceMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;