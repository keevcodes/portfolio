/**
 * a seperate template for individual blog pages is needed when
 * rendering a blog landing page (eg, pages/blog.js is our landing page which shows snippets of all blog posts)
 */


import React from 'react';
import { graphql } from "gatsby";
import styled, {ThemeProvider} from 'styled-components';

import defaultTheme from '../assets/defaultTheme';
import { BlogHeadline } from '../components/atoms/headline';

const Main = styled.main`
  width: 100%;
  max-width: 750px;
  margin: 100px auto;
  border-bottom: 1px solid ${props => props.theme.greenSmoke};

  .blog-post-content {

    & > p {
      font-family: 'Lato', 'sans-serif';
      font-size: 24px;
      line-height: 42px;
      margin: 50px 0;
    }

    & a {
      color: ${props => props.theme.shinyshamrock};
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
   <Main>
      <article>
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
      }
    }
  }
`