import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../molecules/project-card';
import Slider from 'react-slick';

import { StaticQuery,  graphql } from 'gatsby';

const ProjectList = () => (
  <StaticQuery
  query={graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              title
              desc
              link
              imgPath {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                  }
                }
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
      {data.allMarkdownRemark.edges.map(project => {
        return (<ProjectCard {...project} key={project.node.frontmatter.title} />)
      })}
    </Slider>)}} />
)

export default ProjectList;