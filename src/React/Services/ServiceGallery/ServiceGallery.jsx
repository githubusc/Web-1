import React from 'react';
import styled from 'styled-components';
//import { servicesData } from '../servicesData';

import ServiceGalleryItem from './ServiceGalleryItem.jsx';

const ServiceGallery = ({properties, chosenLocation}) => {

    return (
        <ServiceGalleryStyled className='ServiceGallery'>
            {
                properties
                    .filter((property) => {
                        return (chosenLocation === 'All' ||  property.location === chosenLocation);
                    })
                    .map((property, idx) => {
                        return <ServiceGalleryItem key={ idx } property={ property } />
                    })
            }
        </ServiceGalleryStyled>
    );
}

export default ServiceGallery;

const ServiceGalleryStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;