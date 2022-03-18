import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { staffData } from './staffData.js';

/* Components ---------------------------*/
import StaffMember from './StaffMember.jsx';

const Staff = () => {

    return (

        <StaffStyled className='Staff'>
            <h3>Agents</h3>
            <div className="wrapper">
                {
                    staffData.map((member, idx) => {
                        return <StaffMember key = {idx} member={ member }/>
                    })
                }
            </div>
            
        </StaffStyled>
    );
}


export default Staff;


const StaffStyled = styled.div`
    background-color: #004e3b;
    padding: 20px;
    margin: 20px 0px;
    h3 {
        color: #e9ca3e;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;