import React from 'react';
import styled from 'styled-components';

import Dark from './Dark';
import Light from './Light/Light';

const Modal = ({title, modalContent, showModalUpdate}) => {

    const closeModal = () => {
        showModalUpdate(false);
    }
    return (
        <ModalStyled className='Modal' onClick={ closeModal }>
            <Dark />
            <Light title={title} modalContent={modalContent}/>
            
            
        </ModalStyled>
    );
}

export default Modal;

const ModalStyled = styled.div`
    border: solid 5px red;
`;