import React, {useState} from 'react';
import styled from 'styled-components';

import ActiveArea from './ActiveArea';
import Modal from './Modal/Modal';

const Lightbox = ({title, activeContent, modalContent, closeModal}) => {

    const [showModal, showModalUpdate] = useState(false);
    return (
        <LightboxStyled className='Lightbox'>
            <h3>Lightbox</h3>

            <ActiveArea activeContent={ activeContent } showModalUpdate={ showModalUpdate }/>
            {
                showModal &&
                <Modal title={ title } modalContent={ modalContent } showModalUpdate={ showModalUpdate }/>
            }
            
            
            
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;