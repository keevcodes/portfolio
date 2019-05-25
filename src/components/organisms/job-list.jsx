import React from 'react';
import styled from 'styled-components';

import JobCard from '../molecules/job-card';
import { StaticQuery,  graphql } from 'gatsby';


const List = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;

  @media (min-width: 768px) {
    max-height: 50vh;
    overflow-y: scroll;
  }
`

const JobList = () => (<StaticQuery
    query={graphql`
      query {
        allPageDataJson(filter: {page: {title: {eq: "work"}}}) {
          edges {
            node {
              page {
                jobs {
                  company
                  role
                  date
                  responsiblites
                  tools
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
    <List>
      {data.allPageDataJson.edges[0].node.page.jobs.map((job,i) => {
          return (
            <JobCard {...job} key={i}/>
          )
        })}
    </List>)}
/>)

export default JobList;