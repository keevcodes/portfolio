import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ImageMosaicWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 50%;
    left: 50%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 75px);
  }`


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
      console.log(data);
      return (
        <ImageMosaicWrapper>
        <Img fluid={data.image2.childImageSharp.fluid} style={{gridColumn: '3/-1', gridRow: '1/8'}}/>
        <Img fluid={data.image1.childImageSharp.fluid} style={{gridColumn: '1/4', gridRow: '5/9', boxShadow: 'rgba(35, 37, 22, 0.6) 8px -2px 20px 2px'}}/>
        <Img fluid={data.image3.childImageSharp.fluid} style={{gridColumn: '4/-1', gridRow: '7/10', boxShadow: 'rgba(35,37,22, 0.6) -5px -5px 15px 2px'}}/>
      </ImageMosaicWrapper>
    )}} />)

export default ImageMosaic;