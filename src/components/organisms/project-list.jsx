import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../molecules/project-card';

import { StaticQuery,  graphql } from 'gatsby';

const List = styled.ul`
  list-style: none;
  display: flex;
  width: auto;
  min-width: 850px;
  margin: 0;
`
const ProjectList = () => (
  <StaticQuery
  query={graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              title
              desc
              link
              imgPath {
                childImageSharp {
                  fluid(maxWidth: 900) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `}
  render={data => {
    return (<List>
      {data.allMarkdownRemark.edges.map(project => {
        return (<ProjectCard {...project} key={project.node.frontmatter.title} />)
      })}
    </List>)}} />
)

export default ProjectList;