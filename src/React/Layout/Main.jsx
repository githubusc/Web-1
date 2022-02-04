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
            <div className="inset">
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
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    
    .inset {
        padding: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        min-height: 600px;
    }
    
    h1 {
        margin: 0px 0px 20px;
        font-size: 40px;
    }

    h3 {
        margin: 0px 0px 20px;
        font-size: 30px;
    }
`;