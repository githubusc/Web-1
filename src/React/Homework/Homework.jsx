import React from "react";
import styled from "styled-components";
import SunAndMoon from "./SunAndMoon";
import Essays from "./Essays/Essays";

const Homework = () => {
    return (
        <HomeworkStyled>
            <SunAndMoon />
            <Essays />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    background-color: pink;
    padding: 20px;
`;