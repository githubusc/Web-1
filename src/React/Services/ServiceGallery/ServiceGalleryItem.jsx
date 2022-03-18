import React from 'react';
import styled from 'styled-components';
import { servicesData } from '../servicesData';

import { defaultMediaQueries } from 'React/common/useMediaQuery';

import Lightbox from 'React/common/Lightbox/Lightbox';

const ServiceGalleryItem = ({property}) => {

    const ActiveContent = () => {
        return (
            <>
                <img src={ property.image } alt={ property.title } />
                <h3>{ property.title }</h3>
            </>
        );
    }

    const ModalContent = () => {
        return (
            <>
                <img src={ property.image } alt={ property.title } />

                <ul>
                    <li><b>Location: </b>{ property.location }</li>
                    <li><b>Price: </b>{ property.cost }</li>
                </ul>
                <p>{ property.description }</p>
            </>
        );
    }

    return (
        <ServiceGalleryItemStyled className='ServiceGalleryItem'>
            <Lightbox
                title="Current Property"
                activeContent={<ActiveContent />}
                modalContent={<ModalContent />}
            />
        </ServiceGalleryItemStyled>
    );
}

export default ServiceGalleryItem;

const ServiceGalleryItemStyled = styled.div`
    width: 50%;
    padding: 5px;
    position: relative;

    @media ${defaultMediaQueries.mdUp} {
        width: 33%;
        padding: 5px;
    }
    @media ${defaultMediaQueries.lgUp} {
        width: 25%;
        padding: 5px;
    }

    .ActiveArea {
        img {
            width: 100%;
        }

        h3 {
            background-color: rgba(211, 211, 211, 0.515);
            color:white;
            margin: 0px;
            padding: 10px;
            font-size: 12px;
            position: absolute;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-bottom: solid 5px #e9ca7e;

            @media ${defaultMediaQueries.mdUp} {
                font-size: 16px;
            }

            @media ${defaultMediaQueries.lgUp} {
                font-size: 18px;
            }
        }
    }

    .Light {
        img {
            width: 100%;
            display: block;
        }
        ul {
            padding: 15px;
            margin: 0px 0px 10px;
        }
        p {
            margin: 0px 0px 10px;
        }
    }
`;