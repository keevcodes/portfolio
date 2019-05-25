import React from 'react';
import {StaticQuery,  graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

import Description from '../components/molecules/description';
import ProjectList from '../components/organisms/project-list';
import JobList from '../components/organisms/job-list';

const JobContent = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 55%;
  }
`

const ProjectContent = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPageDataJson(filter: {page: {title: {eq: "work"}}}) {
          edges {
            node {
              page {
                headline
              }
            }
          }
        }
    }`}
    render={data => (
    <Layout>
      <JobContent>
        <Description headline={data.allPageDataJson.edges[0].node.page.headline} content=""></Description>
        <JobList />
      </JobContent>
      <ProjectContent>
        <ProjectList />
      </ProjectContent>
    </Layout>
  )} />
)