import React from 'react';
import styled from 'styled-components';

/* Scripts  ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox';

const StaffMember = ({member}) => {

    const ActiveContent = () => {
        return (
            <>
                <img src={ member.image } alt={ member.name } />
                <h4>{ member.name }</h4>
            </>
        )
        
    }

    const ModalContent = () => {
        return <img src={ member.image } alt={ member.name } />;
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <Lightbox
                title={ member.name }
                activeContent={<ActiveContent />}
                modalContent={<ModalContent />}
            />
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    width: 45%;
    margin: 5px;

    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 15px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }

    img {
        width: 100%;
        display: block;
    }

    h4 {
        color: white;
        background-color: black;
        margin: 0px;
        padding: 5px 10px;
        
    }
`;