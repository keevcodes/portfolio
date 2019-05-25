import React from 'react';
import Layout from '../components/layout';
import HomeIcon from '../components/atoms/home-icon';
import Description from '../components/molecules/description';

import {StaticQuery,  graphql } from 'gatsby';

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
        <HomeIcon />
      </Layout>)}
  }/>)
}