import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';

import Layout from '../components/layout';
import Description from '../components/molecules/description';

export default () => (
  (<StaticQuery
    query={graphql`
    query {
      site {
        siteMetadata {
          contact {
            desc
            headline
          }
        }
      }
    }
  `}
    render={data => (
      <Layout>
        <Description headline={data.site.siteMetadata.contact.headline} content={data.site.siteMetadata.contact.desc}></Description>
    </Layout>
    )} />)

)