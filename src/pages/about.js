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
      allPageDataJson(filter: {page: {title: {eq: "about"}}}) {
        edges {
          node {
            ...PageInfo
          }
        }
      }
    }`}
    render={data => (
    <Layout>
      <InfoContainer>
        <Description headline={data.allPageDataJson.edges[0].node.page.headline} content={data.allPageDataJson.edges[0].node.page.desc} />
        <SkillImages />
      </InfoContainer>
      <ImageMosaic />
    </Layout>
    )} />
)