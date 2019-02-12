import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 56px;
  font-family: 'Ubuntu', 'sans-serif';
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }
`

const H2 = styled.h2`
  font-size: 32px;
  margin-bottom: 5px;
  font-family: 'Lato', 'sans-serif';
  color: white;
`

export const Headline = (props) => <H1>{props.content}</H1>

export const HeadlineTwo = (props) => <H2>{props.content}</H2>
