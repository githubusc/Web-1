import React from "react";
import styled from "styled-components";
import Essay from "./Essay";
const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q="S2: What is the difference between Git, Github and Heroku?" >
                <ul>
                    <li>Git:Version control system, manage and edit code on their sysem; Free; Merge branches in once approved.</li>
                    <li>Github: A place for our Git Repos -- remote server -- leveraging Git. Teamwork, code review, sharing.</li>
                    <li>Heroku: Cloud Based Web (App) Server with the ability to deploy apps, without having a DevOps degree.</li>
                </ul>
            </Essay>
            <Essay q="S3: Explain the difference between HTML, CSS and JS." >
                <ul>
                    <li>HTML: Mark Up Language for tag based hierarchy and semantic definition.</li>
                    <li>CSS: The Skin (Appearance / Visual Asethetics), CSS Selectors -- to select html elements. </li>
                    <li>JS: Programming language for Interactive Features of the site (Behavior) Slideshows, scrolling, </li>
                </ul>
            </Essay>
            <Essay q="S4: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?" >
                <ul>
                    <li>Single Page: Does not have to reload like multi-page (less repetition)</li>
                    <li>Faster load time, more efficient.</li>
                </ul>
            </Essay>
            <Essay q="S5: What is the difference between Web Designer, Front End Developer and Back End develper?" >
                <ul>
                    <li>Answer</li>
                </ul>
            </Essay>

        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`