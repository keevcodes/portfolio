import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

const bounce = keyframes`
  0% {
    transform: translate3d(0, -1%, 0);
  }
  
  50% {
    transform: translate3d(0, 1%, 0);
  }
  
  100% {
    transform: translate3d(0, -1%, 0);
  }
`;

const ImageMosaicWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 50%;
    left: 50%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 75px);
  }

  & .gatsby-image-wrapper:nth-child(2) {
    animation: ${bounce} 7s infinite;
  }

  & .gatsby-image-wrapper:nth-child(3) {
    animation: ${bounce} 5s infinite;
  }
`

const ImageMosaic = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "bella_ingy_me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "ingy_me_wedding.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 390) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "me_ingy_baloo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <ImageMosaicWrapper>
          <Img fluid={data.image2.childImageSharp.fluid} style={{ gridColumn: '3/10', gridRow: '1/10'}}/>
          <Img fluid={data.image1.childImageSharp.fluid} style={{ gridColumn: '1/7', gridRow: '5/9', boxShadow:  '5px 10px 35px 5px rgba(0, 0, 0, 0.3'}}/>
          <Img fluid={data.image3.childImageSharp.fluid} style={{ gridColumn: '6/-1', gridRow: '7 / -1', marginRight: '-30px', boxShadow:  '5px 10px 35px 5px rgba(0, 0, 0, 0.3'}}/>
        </ImageMosaicWrapper>
    )}} />)

export default ImageMosaic;