import React from 'react'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components';

import Navigation from './molecules/navigation';
import Footer from './molecules/footer';
import defaultTheme from '../assets/defaultTheme';

import './layout.css'


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg,#000000,#000000,#414345,#9b9999);

  @media (min-width: 768px) {
    max-height: 100vh;
    padding-bottom: 50px;
    height: 100vh;
    padding-bottom: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  width: 90vw;
  height: auto;
  margin: 0 auto;
  border: 5px solid rgba(152, 176, 111, 0.1);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 80vh;
  }
`
const Layout = ({children}) => {
  return (<ThemeProvider theme={defaultTheme}>
  <Container>
    <Helmet>
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Lato|Ubuntu" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Navigation />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
  </ThemeProvider>)
}

export default Layout
