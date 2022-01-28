import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Nav from './Layout/Nav/Nav';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

const App = () => {

    return (
        <BrowserRouter>
            <AppStyled className='App'>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </AppStyled>
        </BrowserRouter>
    );
}

export default App;

const AppStyled = styled.div`

`;