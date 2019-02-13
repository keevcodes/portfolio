import React from 'react';
import styled from 'styled-components';
import { HeadlineTwo } from '../atoms/headline';
import { SmItalicText, SmallText } from '../atoms/text';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin 15px 0;
`

const Job = styled.div`
  width: 100%;
  padding: 0 50px;
`

const JobCard = (props) => <Job>
  <HeadlineTwo content={props.company}></HeadlineTwo>
  <Wrapper>
   <SmallText text={props.role} highlight></SmallText>
   <SmItalicText text={props.date} highlight></SmItalicText>
  </Wrapper>
  <SmallText text={props.responsiblites}/>
  <Wrapper>{props.tools.map(tool => <SmallText text={tool} key={tool}/>)}</Wrapper>
</Job>
export default JobCard;