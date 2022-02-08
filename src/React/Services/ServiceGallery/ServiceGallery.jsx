import React from 'react';
import styled from 'styled-components';

import ServiceGalleryItem from './ServiceGalleryItem';

const ServiceGallery = () => {

    return (
        <ServiceGalleryStyled className='ServiceGallery'>
            ServiceGallery
            <ServiceGalleryItem />
        </ServiceGalleryStyled>
    );
}

export default ServiceGallery;

const ServiceGalleryStyled = styled.div`
    
`;