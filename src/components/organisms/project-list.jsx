import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../molecules/project-card';
import Slider from 'react-slick';
import { StaticQuery,  graphql } from 'gatsby';

const ProjectList = () => (
  <StaticQuery
  query={graphql`
    query {
      allPageDataJson(filter: {page: {title: {eq:"work"}}}) {
        edges {
          node {
            page {
              projects {
                title
                desc
                imgPath
                link
              }
            }
          }
        }
      }
    }
  `}
  render={data => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: i => (
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '50%',
          height: '5px',
          width: '5px'
        }}></div>
      )
    };
    return (
    <Slider {...settings}>
      {data.allPageDataJson.edges[0].node.page.projects.map(project => {
        return (<ProjectCard {...project} key={project.title} />)
      })}
    </Slider>)}} />
)

export default ProjectList;