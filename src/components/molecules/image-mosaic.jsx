import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

const grow = keyframes`
  to {
    transform: scaleX(1.5);
  }
`;

const ImageMosaicWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
    left: 50%;
    display: grid;
    grid-template-columns: repeat(11, 4vw);
    grid-template-rows: repeat(8, 10vh);
  }

  & .gatsby-image-wrapper {
      position: relative;
      box-shadow: 5px 10px 35px 5px rgba(0, 0, 0, 0.3);

      &:last-child {
        @media (min-width: 768px) {
          margin-right: -30px;
        }
      }
    }
`

const ImageMosaic = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "bella_ingy_me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "ingy_me_wedding.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "me_ingy_baloo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 660) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <ImageMosaicWrapper>
          <Img fluid={data.image2.childImageSharp.fluid} style={{ gridColumn: '5/-1', gridRow: '1/6'}}/>
          <Img fluid={data.image1.childImageSharp.fluid} style={{ gridColumn: '1/7', gridRow: '4/8'}}/>
          <Img fluid={data.image3.childImageSharp.fluid} style={{ gridColumn: '6/-1', gridRow: '5 / -1'}}/>
        </ImageMosaicWrapper>
    )}} />)

export default ImageMosaic;