import React from 'react';
import styled from 'styled-components';

import JobCard from '../molecules/job-card';
import { StaticQuery,  graphql } from 'gatsby';

const CardViewBox = styled.div`
  width: 100%;
  overflow: scroll;
`

const List = styled.ul`
  width: 200%;
  margin: 0;
  list-style: none;
  display: flex;
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
    render={data => (<CardViewBox>
      <List>
        {data.site.siteMetadata.work.jobs.map((job,i) => {
          return (
            <JobCard {...job} key={i}/>
          )
        })}
      </List>
    </CardViewBox>
    )}
/>)

export default JobList;