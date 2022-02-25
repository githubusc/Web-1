import React from "react";
import styled from "styled-components";
import SunAndMoon from "./SunAndMoon";
import ControlledInput from "./ControlledInput";
import Essays from "./Essays/Essays";

const Homework = () => {
    return (
        <HomeworkStyled>
            <h1>Homework</h1>
            <SunAndMoon />
            <ControlledInput />
            <Essays />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    // background-color: pink;
    // padding: 20px;
`;