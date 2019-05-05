import React from 'react';
import styled from 'styled-components';

import '../../assets/icons.svg';

const Icon = styled.div`
  display: flex;
  min-width: 60%;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  & svg {
    height: 100vh;
    width: 100%;
  }
`

const HomeIcon = () => (
  <Icon>
    <svg><use xlinkHref="#icons_kiwi-background"/></svg>
  </Icon>
)

export default HomeIcon;