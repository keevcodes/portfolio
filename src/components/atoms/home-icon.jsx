import React from 'react';
import styled from 'styled-components';

import '../../assets/icons.svg';

const Container = styled.div`
  height: 50vh;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const BackgroundIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 768px) {
    justify-content: center;
    height: 100vh;
    width: 55vw;
  }

  & svg {
    height: 100%;
    width: 100%;
  }

`
const BirdIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 25%;
  width: calc(90vw - 5px);

  @media (min-width: 768px) {
    height: calc(100% - 150px);
    top: auto;
  }
`

const HomeIcon = () => (<Container>
  <BackgroundIcon>
    <svg><use xlinkHref="#icons_kiwi-background"/></svg>
  </BackgroundIcon>
  <BirdIcon>
    <svg><use xlinkHref="#icons_kiwi-bird"/></svg>
  </BirdIcon>
</Container>)

export default HomeIcon;