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
      allFile(filter:{extension:{regex:"/(jpeg|jpg|png)/"}, sourceInstanceName:{eq:"project-images"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
              }
              sizes(maxWidth: 300) {
                aspectRatio
                src
                srcSet
                srcSetWebp
                sizes
                originalImg
                originalName
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
      {data.allFile.edges.map(img => {
        return (<ProjectCard {...img.node.childImageSharp.fluid} key={img.node.childImageSharp.sizes.originalName} />)
      })}
    </List>
</ViewBox>)}} />
)

export default ProjectList;