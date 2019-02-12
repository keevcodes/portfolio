import React from 'react';
import styled from 'styled-components';
import { HeadlineTwo } from '../atoms/headline';
import { SmItalicText, SmallText } from '../atoms/text';

const RoleDateWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const Job = styled.div`
  width: 100%;
  padding: 0 50px;
`

const JobCard = (props) => (<Job key={props.company}>
  <HeadlineTwo content={props.company}></HeadlineTwo>
  <RoleDateWrapper>
   <SmallText text={props.role} highlight></SmallText>
   <SmItalicText text={props.date} highlight></SmItalicText>
  </RoleDateWrapper>
  <SmallText text={props.responsiblites}/>
</Job>)
export default JobCard;