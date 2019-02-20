import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 56px;
  font-family: 'Ubuntu', 'sans-serif';
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 65px;
  }
`

const H2 = styled.h2`
  font-size: 32px;
  margin-bottom: 5px;
  font-family: 'Lato', 'sans-serif';
  color: white;
`

const PostHl = styled(H2)`
  color: ${props => props.theme.greenSmoke};
  font-size: 45px;
`

const BlogHl = styled(H1)`
  color: ${props => props.theme.space};
  margin: 0 auto;
`

export const Headline = (props) => <H1>{props.content}</H1>

export const HeadlineTwo = (props) => <H2>{props.content}</H2>

export const PostHeadline = (props) => <PostHl>{props.content}</PostHl>

export const BlogHeadline = (props) => <BlogHl>{props.content}</BlogHl>
