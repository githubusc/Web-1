import React from 'react';
import styled from 'styled-components';

const ServiceMenuItem = ({location, chosenLocation, chosenLocationUpdate}) => {
    const clickHandler = () => {
        chosenLocationUpdate(location);
    }

    const theClassName = (chosenLocation === location) ? 'ServiceMenuItem active' : 'ServiceMenuItem';
    return (
        <ServiceMenuItemStyled className={ theClassName } onClick={ clickHandler }>
            { location }
        </ServiceMenuItemStyled>
    );
}

export default ServiceMenuItem;

const ServiceMenuItemStyled = styled.div`
    width: 150px;
    font-size: 18px;
    border-bottom: solid 5px #e9ca7e;
    line-height: 40px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: lightblue;
    }

    &.active {
        background-color: #004e3b;
        color: white;
    }
`;