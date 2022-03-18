import React from 'react';
import styled from 'styled-components';

const TabbedMenuItem = ({ item, chosenTab, chosenTabUpdate }) => {
    const clickHandler = () => {
        chosenTabUpdate(item);
    }

    const theClassName = (item.title === chosenTab.title) ? 'TabbedMenuItem selected' : 'TabbedMenuItem';
    return (
        <TabbedMenuItemStyled className={ theClassName } onClick={ clickHandler }>
            { item.title }
        </TabbedMenuItemStyled>
    );
}

export default TabbedMenuItem;

const TabbedMenuItemStyled = styled.div`
    background-color: black;
    color: white;
    width: 150px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    h3 {
        color: #e9ca7e;
    }

    &.selected {
        background-color: #004e3b;
        color: #e9ca7e;
        text-decoration: underline;
    }
`;