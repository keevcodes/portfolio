import React from 'react';
import styled from 'styled-components';
import ReactVivus from 'react-vivus';

import JvmLogo from '../../assets/jvm-horse.svg';

const Icon = styled.div`
  display: flex;
  width: 100px;
  align-items: center;


  & svg {
    width: 100%;
  }
`

const JvmIcon = () => (
  <Icon><JvmLogo /></Icon>
)

export default JvmIcon;