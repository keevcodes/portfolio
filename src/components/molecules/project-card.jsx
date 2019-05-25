import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


import { SmDarkText, SmDarkItalicText } from '../atoms/text';

const Project = styled.div`
  padding: 5px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 98%;
  border-radius: 4px;

  media (min-width: 768px) {
    width: 95%;
  }
`

const CardDetails = styled.div`
  padding: 0 0 10px 10px;
`

const CTA = styled.a`
  display: inline-block;
  max-width: 60%;
  border: 1px solid ${props => props.theme.shinyshamrock};
  color: ${props => props.theme.shinyshamrock};
  font-family: 'Lato', 'sans-serif';
  text-decoration: none;
  padding: 5px 20px;
  margin-top: 15px;
`

const ProjectCard = (props) => (
  <Project>
    <Img fluid={props.node.frontmatter.imgPath.childImageSharp.fluid} />
    <CardDetails>
      <SmDarkItalicText text={props.node.frontmatter.title} />
      <SmDarkText text={props.node.frontmatter.desc} />
      <CTA href={props.node.frontmatter.link}>Visit</CTA>
    </CardDetails>
  </Project>
)

export default ProjectCard;