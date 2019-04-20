import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

import HomeIcon from '../components/atoms/home-icon';
import Description from '../components/molecules/description';

import {StaticQuery,  graphql } from 'gatsby';
import { PageInfo } from '../data/pageInfoFragment';

const Wrapper = styled.div`
  width: 100%;
`


export default () => {
  return (<StaticQuery
    query={graphql`
    query {
      allPageDataJson(filter: {page: {title: {eq: "home"}}}) {
        edges {
          node {
            ...PageInfo
          }
        }
      }
    }
  `}
    render={data => {
      return (<Layout>
        <Description headline={data.allPageDataJson.edges[0].node.page.headline} content={data.allPageDataJson.edges[0].node.page.desc}></Description>
        <HomeIcon width="50%" height="70%" />
      </Layout>)}
  }/>)
}