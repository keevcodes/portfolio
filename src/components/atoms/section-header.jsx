import React from 'react';
import styled from 'styled-components';


const Header = styled.h3`
  font-size: 2.5em;
  font-weight: bold;
  color: #140E2A;
  font-family: 'Montserrat', sans-serif;
`

const Period = styled.span`
  color: #E24B6C;
  font-size: 1.25em;
`

const SectionHeader = (props) => (
  <Header>{props.title}<Period>.</Period></Header>
)

export default SectionHeader;