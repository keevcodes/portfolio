import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import { HeadlineTwo } from '../atoms/headline';
import { SmItalicText, SmallText } from '../atoms/text';

const transitionName = "jobCard"

const Job = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 25px;
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.5s ease-out;

  &.${transitionName}-appear {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease-in;
  }

  @media (min-width: 768px) {
    opacity: 1;
    transform: translateX(0px);
    transition: all 0.5s ease-out;

    &.${transitionName}-appear {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.5s ease-in;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin 8px 0;
`
const JobCard = (props) => {

  return (<CSSTransitionGroup
    transitionAppearTimeout={500}
    transitionLeaveTimeout={500}
    transitionEnterTimeout={250}
    transitionAppear={true}
    transitionName={transitionName}>
      <Job>
        <HeadlineTwo content={props.company}></HeadlineTwo>
        <Wrapper>
         <SmallText text={props.role} highlight></SmallText>
         <SmItalicText text={props.date} highlight></SmItalicText>
        </Wrapper>
        <SmallText text={props.responsiblites}/>
        <Wrapper>{props.tools.map(tool => <SmallText text={tool} key={tool}/>)}</Wrapper>
      </Job>
  </CSSTransitionGroup>)
}

export default JobCard;