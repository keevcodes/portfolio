import React from 'react';
import styled from 'styled-components';


const Small = styled.p`
  font-family: 'Lato', 'sans-serif';
  font-size: 18px;
  color: ${props => props.highlight ? props.theme.greenSmoke : '#fff'};
  margin-bottom: 0;
  padding: 0 7.5px;
`

const SmItalic = styled(Small)`
  font-style: italic;
  border-left: 1px solid #fff;
`


export const SmallText = (props) => <Small highlight={props.highlight}>{props.text}</Small>

export const SmItalicText = (props) => <SmItalic highlight={props.highlight}>{props.text}</SmItalic>
