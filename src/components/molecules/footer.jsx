import React from 'react';
import styled from 'styled-components';
import '../../assets/icons.svg';

import {StaticQuery,  graphql } from 'gatsby';

const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 45px auto 15px;
  list-style: none;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 0 auto;
  }
`

const FooterItem = styled.li`
  fill: #fff;
  height: 2rem;
  width: 2rem;
  transform: scale(1);
  transition: color 0.3s ease, transform 0.3s ease;

  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
    padding: 10px 25px 0 0;
  }

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
    return (<footer>
    <FooterList>
      {data.site.siteMetadata.footer.map(item => {
        return (<a href={item.link} key={item.icon} style={{textDecoration: 'none'}}>
        <FooterItem>
          <svg><use xlinkHref={"#icons_" + `${item.icon}`}/></svg>
        </FooterItem>
        </a>)
      })}
    </FooterList>
    </footer>)
  }}
  >
</StaticQuery>)

export default Footer;