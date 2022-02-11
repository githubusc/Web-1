import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tabbedData } from './tabbedData';
/* Components ---------------------------*/
import TabbedMenu from './TabbedMenu/TabbedMenu';
import Content from './Content';
const Tabbed = () => {

    const [chosenTab, chosenTabUpdate] = useState(tabbedData[0]);
    return (
        <TabbedStyled className='Tabbed'>
            Tabbed 
            <TabbedMenu chosenTab={ chosenTab } chosenTabUpdate={ chosenTabUpdate } tabbedData={ tabbedData }/>
            <Content chosenTab={ chosenTab }/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;