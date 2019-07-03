/**
 * a seperate template for individual blog pages is needed when
 * rendering a blog landing page (eg, pages/blog.js is our landing page which shows snippets of all blog posts)
 */


import React from 'react';
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import defaultTheme from '../assets/defaultTheme';
import { BlogHeadline } from '../components/atoms/headline';

const GlobalStyle = createGlobalStyle`
body {
  nav {
    display: flex;
    width: 100%;
    max-width: 750px;
    margin: 75px auto 0;
    padding: 0 20px 0;
  }

  .back-link {
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

  .blog-article {
    padding: 60px 30px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(52,61,68,0.05);
  }

  .blog-post-content {

    & > p {
      font-family: 'Lato', 'sans-serif';
      font-size: 18px;
      line-height: 24px;
      margin: 50px 0;
    }

    & a {
      color: ${props => props.theme.shinyshamrock};
    }
  }
}`;

const Main = styled.main`
  width: 100%;
  max-width: 750px;
  margin: 30px auto;
  padding: 0 20px;
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
`
const PostInfoDate = styled(PostInfo)`

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

  const { markdownRemark: post } = data
  return (<ThemeProvider theme={defaultTheme}>
  <>
  <Helmet>
    <title>Keeve.me Blog / {post.frontmatter.title }</title>
    <meta name="description" content={post.frontmatter.description}></meta>
  </Helmet>
    <GlobalStyle />
    <nav>
      <Link className="back-link" to="/blog">Back</Link>
    </nav>
    <Main>
      <article className="blog-article">
        <BlogHeadline content={post.frontmatter.title}></BlogHeadline>
        <PostInfoWrapper>
          <PostInfo>{post.frontmatter.readTime} min read</PostInfo>
          <PostInfoDate> {post.frontmatter.date} </PostInfoDate>
        </PostInfoWrapper>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Main>
  </>
  </ThemeProvider>)
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        readTime
        description
      }
    }
  }
`