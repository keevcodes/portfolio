/**
 * this page is the default blog landing page rendering
 * blog titles and snippets from each blog. See src/templates/blogPost.js
 * for the blog post template
 */

import React from 'react';
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import {SmDarkText} from '../components/atoms/text';

import { BlogHeadline, PostHeadline } from '../components/atoms/headline';

import styled, {ThemeProvider, createGlobalStyle}  from 'styled-components';
import defaultTheme from '../assets/defaultTheme';

const GlobalStyle = createGlobalStyle`
  body {
  .home-link {
    text-decoration: none;
    padding: 7px 15px;
    font-size: 18px;
    font-family: 'Lato', 'sans-serif';
    color: ${props => props.theme.purple};
    text-transform: uppercase;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.purple};
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${props => props.theme.greenSmoke};
      color: #fff;
      border: 2px solid #fff;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
  }
 }
`

const Wrapper = styled.div`
  display: block;
  margin: 50px 20px 20px;

  @media (min-width: 768px) {
    max-width: 750px;
    margin: 75px auto;
  }
`

const Nav = styled.header`
  display: flex;
  margin-bottom: 30px;
`

const PostContent = styled.main`
  display: block;
  margin: 20px 0;
  padding: 50px 0;
  border-bottom: 1px solid ${props => props.theme.greenSmoke};

  & .post-card {
    padding: 30px 35px 50px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(52,61,68,0.05);

    &:hover {
      transition: all 0.5s ease;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
    }
  }
`

const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  font-family: 'Lato', 'sans-serif';
  color: ${props => props.theme.shinyshamrock}
`

const PostInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px;
  padding-left: 0px;
`
const PostInfoDate = styled(PostInfo)`
  padding-left: 15px;

  &:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    left: -2px;
    background: ${props => props.theme.purple};
  }

`

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (<ThemeProvider theme={defaultTheme}>
  <>
    <Helmet>
      <title>Keeve.me Blog</title>
      <meta charset='utf-8'></meta>
      <meta name="description" content="the blog of Andrew McKeever, a web developer in Hamburg Germany"></meta>
    </Helmet>
    <Wrapper>
    <GlobalStyle />
      <Nav>
        <Link to="/" className="home-link">Keeve.me</Link>
      </Nav>
    <BlogHeadline content="Keevechain, development opinion storage"/>
      {posts.filter(post => post.node.excerpt !== "").map(({node: post}) => {
        return (<PostContent key={post.frontmatter.title}>
          <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
            <div className="post-card">
              <PostHeadline content={post.frontmatter.title} />
              <PostInfoWrapper>
                <PostInfo>{post.frontmatter.readTime} min read</PostInfo>
                <PostInfoDate>{post.frontmatter.date}</PostInfoDate>
              </PostInfoWrapper>
              <SmDarkText text={post.excerpt} />
            </div>
          </Link>
        </PostContent>)
      })}
    </Wrapper>
  </>
</ThemeProvider>)
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {category: {eq: "blog" }}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date
            path
            readTime
          }
        }
      }
    }
  }
`
