import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Description from '../components/molecules/description';
import ImageMosaic from '../components/molecules/image-mosaic';
import SkillImages from '../components/molecules/skill-images';


const InfoContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            about {
              desc
              headline
            }
          }
        }
    }`}
    render={data => (
    <Layout>
      <InfoContainer>
        <Description headline={data.site.siteMetadata.about.headline} content={data.site.siteMetadata.about.desc} />
        <SkillImages />
      </InfoContainer>
      <ImageMosaic />
    </Layout>
    )} />
)