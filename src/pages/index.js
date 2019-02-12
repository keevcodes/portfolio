import React from 'react';
import Layout from '../components/layout';

import HomeIcon from '../components/atoms/home-icon';
import Description from '../components/molecules/description';

import {StaticQuery,  graphql } from 'gatsby';


export default () =>
  (<StaticQuery
    query={graphql`
    query {
      site {
        siteMetadata {
          home {
            desc
            headline
          }
        }
      }
    }
  `}
    render={data => (
      <Layout>
        <Description headline={data.site.siteMetadata.home.headline} content={data.site.siteMetadata.home.desc}></Description>
        <HomeIcon width="50%" height="70%" />
    </Layout>
    )} />)
