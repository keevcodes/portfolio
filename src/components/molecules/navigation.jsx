import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery,  graphql } from 'gatsby';

const Nav = styled.nav`
  width: 90vw;
  margin: 0 auto;
  padding: 20px 0 0;
  z-index: 10;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  margin: 0;
`;

const ListItem = styled.li`
  color: #fff;
  padding-left: 15px;

  &:hover {
    content: '';
    color: #DBFF76;
  }
`


const Navigation = () => (
  <StaticQuery
    query={graphql`
    query {
      site {
        siteMetadata {
          title
          navigation {
            title
            route
          }
        }
      }
    }
  `}
    render={data => (
      <Nav>
        <List>
          {data.site.siteMetadata.navigation.map((item) => {
            return (<Link to={item.route} key={item.title} style={{textDecoration: 'none'}}>
              <ListItem width="1.25em" height="1.75em" margin="0.5em">{item.title}</ListItem>
            </Link>
          )
          })}
        </List>
      </Nav>
    )}/>
)

export default Navigation;