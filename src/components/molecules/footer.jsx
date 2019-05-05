import React from 'react';
import styled from 'styled-components';
import '../../assets/icons.svg';

import {StaticQuery,  graphql } from 'gatsby';

const FooterList = styled.ul`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  list-style: none;
`

const FooterItem = styled.li`
  fill: #fff;
  height: 3rem;
  width: 3rem;
  padding: 5px 25px;
  transform: scale(1);
  transition: color 0.3s ease, transform 0.3s ease;

  & svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    fill: ${props => props.theme.greenSmoke};
    transform: scale(1.2);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  &:first-of-type {
    padding: 5px 25px 0 0;
  }
`

const Footer = () => (<StaticQuery
  query={graphql`
    query {
      site {
        siteMetadata {
          footer {
            icon
            link
          }
        }
      }
    }
  `}
  render={data => {
    return (<FooterList>
      {data.site.siteMetadata.footer.map(item => {
        return (<a href={item.link} key={item.icon} style={{textDecoration: 'none'}}>
        <FooterItem>
          <svg><use xlinkHref={"#icons_" + `${item.icon}`}/></svg>
        </FooterItem>
        </a>)
      })}
    </FooterList>)
  }}
  >
</StaticQuery>)

export default Footer;