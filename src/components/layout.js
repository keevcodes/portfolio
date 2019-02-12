import React from 'react'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components';

import Navigation from './molecules/navigation';
import defaultTheme from '../assets/defaultTheme';

import './layout.css'


const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  width: 90vw;
  height: auto;
  min-height: 85vh;
  margin: 0 auto;
  border: 5px solid rgba(152, 176, 111, 0.1);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
const Layout = ({children}) => {
  return (<ThemeProvider theme={defaultTheme}>
  <>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Lato|Ubuntu" rel="stylesheet" />
    </Helmet>
    <Navigation />
    <Content>
      {children}
    </Content>
  </>
  </ThemeProvider>)
}

export default Layout
