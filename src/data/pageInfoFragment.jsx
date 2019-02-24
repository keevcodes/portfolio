import React from 'react';
import { graphql } from 'gatsby';

export const PageInfo = graphql`
  fragment PageInfo on PageDataJson {
      page {
        headline
        desc
      }
}`

