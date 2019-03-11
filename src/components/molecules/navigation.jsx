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
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0%;
  padding-left: 15px;

  .link {
    text-decoration: none;
    font-family: 'Lato, sans-serif';
    opacity: 1;
    margin-top: 0;
    color: ${props => props.theme.white};
    transition: all 0.2s ease;

    &-hidden {
      opacity: 0;
      position: absolute;
      top: 40%;
      text-decoration: none;
      color: ${props => props.theme.yellowGreen};
    }
  }


  &:hover {
    .link {
      opacity: 0;
      margin-top: -40%;
      transition: all 0.3s ease;

      &-hidden {
        opacity: 1;
        top: 0;
        transition: all 0.3s ease;
      }
    }
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
            return (
              <ListItem width="1.25em" height="1.75em" margin="0.5em" key={item.title} title={item.title} >
                <Link to={item.route} className="link">{item.title}</Link>
                <Link to={item.route} className="link-hidden">{item.title}</Link>
              </ListItem>
          )
          })}
        </List>
      </Nav>
    )}/>
)

export default Navigation;