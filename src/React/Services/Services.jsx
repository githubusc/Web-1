import React, {useState} from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube-embed'

/* Components ---------------------------*/
import ServiceGallery from './ServiceGallery/ServiceGallery.jsx';
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx';

/* Scripts ---------------------------*/
import { servicesData } from './servicesData';

const Services = () => {

    const [chosenLocation, chosenLocationUpdate] = useState('All');
    console.log('chosenLocation', chosenLocation);
    
    return (
        <ServicesStyled className='Services'>
            <h1>Properties</h1>
            <ServiceMenu locations={ servicesData.locations } chosenLocation={ chosenLocation } chosenLocationUpdate={ chosenLocationUpdate }/>
            <ServiceGallery properties={ servicesData.properties } chosenLocation={ chosenLocation }/>
            <YouTube id='FBWR89DBKSs' />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    Youtube {
        display: flex;
    }
`;