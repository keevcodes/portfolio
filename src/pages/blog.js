/**
 * this page is the default blog landing page rendering
 * blog titles and snippets from each blog. See src/templates/blogPost.js
 * for the blog post template
 */

import React from 'react';
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import { BlogHeadline, PostHeadline } from '../components/atoms/headline';
import { SmDarkText } from '../components/atoms/text';

import styled, {ThemeProvider}  from 'styled-components';
import defaultTheme from '../assets/defaultTheme';

const Wrapper = styled.div`
  display: block;
  margin: 50px 20px 20px;

  @media (min-width: 768px) {
    max-width: 750px;
    margin: 100px auto;
  }
`
const Header = styled.div`
  width: 100%;
`

const PostContent = styled.main`
  display: block;
  margin: 20px 0;
  padding: 50px 0;
  border-bottom: 1px solid ${props => props.theme.greenSmoke};
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
  const { edges: posts } = data.allMarkdownRemark

  return (<ThemeProvider theme={defaultTheme}>
  <>
    <Helmet>
      <title>Keeve.me Blog</title>
      <meta name="description" content="the blog of Andrew McKeever, a web developer in Hamburg Germany"></meta>
    </Helmet>
    <Wrapper>
    <Link to="/" style={{textDecoration: 'none'}}>
        <SmDarkText text="Home" />
    </Link>
    <Header>
      <BlogHeadline content="Keevechain"/>
    </Header>
      {posts.filter(post => post.node.excerpt !== "").map(({node: post}) => {
        console.log(post)
        return (<PostContent key={post.frontmatter.title}>
          <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
            <PostHeadline content={post.frontmatter.title} />
          </Link>
          <div style={{ padding: '0 20px' }}>
            <PostInfoWrapper>
              <PostInfo>{post.frontmatter.readTime} min read</PostInfo>
              <PostInfoDate>{post.frontmatter.date}</PostInfoDate>
            </PostInfoWrapper>
            <SmDarkText text={post.excerpt} />
          </div>
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
