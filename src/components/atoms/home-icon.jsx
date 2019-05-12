import React from 'react';
import styled from 'styled-components';

import '../../assets/kiwi-watercolor.svg';

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
    width: 50vw;
  }

  & svg {
    height: 100%;
    width: 100%;
  }

`

const HomeIcon = () => {
return (
<Container>
  <BackgroundIcon>
    <svg><use xlinkHref="#kiwi-watercolor"></use></svg>
  </BackgroundIcon>
</Container>)}

export default HomeIcon;