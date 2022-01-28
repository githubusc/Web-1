import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from 'React/Welcome/Welcome';
import Services from 'React/Services/Services';
import Contact from 'React/Contact/Contact';
import Login from 'React/Login/Login';
import Homework from 'React/Homework/Homework';

const Main = () => {

    return (
        <MainStyled className='Main'>
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/homework">
                    <Homework />
                </Route>
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    
    .inset {
        border: solid 10px purple;
        padding: 20px;
        max-width: 800px;
        margin: auto;
    }
    
`;