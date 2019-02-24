import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


import { SmDarkText, SmDarkItalicText } from '../atoms/text';

const Project = styled.div`
  margin: 20px;
  padding: 35px 25px;
  background-color: #fff;
  width: 90%;
  border-radius: 10px;
`

const CTA = styled.a`
  display: inline-block;
  max-width: 60%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.shinyshamrock};
  color: ${props => props.theme.shinyshamrock};
  font-family: 'Lato', 'sans-serif';
  text-decoration: none;
  padding: 5px 20px;
  margin-top: 15px;
`

const ProjectCard = (props) => {
  console.log(props)
  return(
  <Project>
    <Img fluid={props.node.frontmatter.imgPath.childImageSharp.fluid} />
    <SmDarkItalicText text={props.node.frontmatter.title} />
    <SmDarkText text={props.node.frontmatter.desc} />
    <CTA href={props.node.frontmatter.link}>Visit</CTA>
  </Project>
  )
}

export default ProjectCard;