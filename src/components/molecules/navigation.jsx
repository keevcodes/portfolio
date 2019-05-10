import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery,  graphql } from 'gatsby';
import { MediumText } from '../atoms/text';

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 90vw;
  margin: 0 auto;
  padding-top: 20px;

`;

const ListItem = styled.li`
  display: flex;
  position: relative;
  bottom: 0%;
  padding-left: 15px;

  .link {
    text-decoration: none;
    opacity: 1;
    margin-top: 0;
    transition: all 0.2s ease;

    &-hidden {
      display: none;
    }
  }

  @media (min-width: 980px) {
    flex-direction: column;


    & .link-hidden {
        display: flex;
        opacity: 0;
        position: absolute;
        top: 40%;
        text-decoration: none;
        color: ${props => props.theme.yellowGreen};
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
      <nav>
        <List>
          {data.site.siteMetadata.navigation.map((item) => {
            return (
              <ListItem key={item.title} title={item.title} >
                <Link to={item.route} className="link"><MediumText text={item.title} /></Link>
                <Link to={item.route} className="link-hidden"><MediumText highlight text={item.title} /></Link>
              </ListItem>
          )
          })}
        </List>
      </nav>
    )}/>
)

export default Navigation;