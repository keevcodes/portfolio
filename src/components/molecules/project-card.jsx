import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';


import { SmallText } from '../atoms/text';

const Project = styled.li`
  margin: 20px;
  padding: 35px 25px;
  box-shadow: 5px 4px 25px 5px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 45%;
`

const ProjectCard = (props) => {
  return(<Project><Img fluid={props} /></Project>)
}

export default ProjectCard;