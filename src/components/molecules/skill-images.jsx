import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';


const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 30px auto 0;
  padding-bottom: 50px;
  justify-content: center;
`


const FluidImg = styled.div`
  height: 50px;
  width: 50px;
  margin: 10px 10px;
`

const SkillImages = () => {
  return (
    <StaticQuery
    query={graphql`
    query {
      allFile(filter:{extension:{regex:"/(jpeg|jpg|png)/"},  sourceInstanceName:{eq:"skills"}}) {
        edges {
          node {
            childImageSharp {
              sizes(maxWidth: 300) {
                originalName
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }`
    }
    render={data => {
      return (<SkillsWrapper>
        {data.allFile.edges.map(img => {
        return (
          <FluidImg key={img.node.childImageSharp.sizes.originalName}><Img sizes={img.node.childImageSharp.sizes}/></FluidImg>
        )
      })}
      </SkillsWrapper>
      )}}/>
  )
}

export default SkillImages;