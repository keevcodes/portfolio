import React from 'react';
import styled from 'styled-components';

import JobCard from '../molecules/job-card';
import { StaticQuery,  graphql } from 'gatsby';


const List = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
`

const JobList = () => (<StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            work {
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
    `}
    render={data => (
    <List>
      {data.site.siteMetadata.work.jobs.map((job,i) => {
          return (
            <JobCard {...job} key={i}/>
          )
        })}
    </List>)}
/>)

export default JobList;