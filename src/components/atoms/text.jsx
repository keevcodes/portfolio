import React from 'react';
import styled from 'styled-components';


const Small = styled.p`
  font-family: 'Lato', 'sans-serif';
  font-size: 16px;
  color: ${props => props.highlight ? props.theme.greenSmoke : '#fff'};
  margin-bottom: 0;
  padding: 0 7.5px;
`

const SmItalic = styled(Small)`
  font-style: italic;
  border-left: 1px solid #fff;
`

const SmDark = styled(Small)`
  color: #000;
  padding: 0;
`

const SmDarkItalic = styled(SmItalic)`
  color: #000;
  border-left: none;
  padding: 10px 0;
`

const Medium = styled(Small)`
  font-size: 22px;
  font-weight: bold;
`


export const SmallText = (props) => <Small highlight={props.highlight}>{props.text}</Small>

export const SmItalicText = (props) => <SmItalic highlight={props.highlight}>{props.text}</SmItalic>

export const SmDarkText = (props) => <SmDark>{props.text}</SmDark>

export const SmDarkItalicText = (props) => <SmDarkItalic>{props.text}</SmDarkItalic>

export const MediumText = (props) => <Medium highlight={props.highlight}>{props.text}</Medium>
