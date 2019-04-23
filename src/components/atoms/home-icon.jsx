import React from 'react';
import styled from 'styled-components';

import KiwiBackground from '../../assets/kiwi-background.svg';

const Icon = styled.div`
  display: flex;
  min-width: 60%;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  & svg {
    width: 100%;
  }
`

const HomeIcon = () => (
  <Icon><KiwiBackground /></Icon>
)

export default HomeIcon;