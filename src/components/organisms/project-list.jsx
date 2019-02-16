import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../molecules/project-card';
import { StaticQuery,  graphql } from 'gatsby';

const ViewBox  = styled.div`
  width: 100%;
  overflow: scroll;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  width: auto;
  min-width: 115%;
`

const ProjectList = () => (
  <StaticQuery
  query={graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              desc
              link
              imgPath {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    aspectRatio
                    src
                    srcSet
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
    return (<ViewBox>
    <List>
      {data.allMarkdownRemark.edges.map(project => {
        return (<ProjectCard {...project} key={project.node.frontmatter.title} />)
      })}
    </List>
</ViewBox>)}} />
)

export default ProjectList;