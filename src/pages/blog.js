/**
 * this page is the default blog landing page rendering
 * blog titles and snippets from each blog. See src/templates/blogPost.js
 * for the blog post template
 */

import React from 'react';
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import { BlogHeadline, PostHeadline } from '../components/atoms/headline';
import { SmDarkItalicText, SmDarkText } from '../components/atoms/text';

import styled, {ThemeProvider}  from 'styled-components';
import defaultTheme from '../assets/defaultTheme';

const Wrapper = styled.div`
  display: block;
  width: auto;
  max-width: 1280px;
  margin: 50px auto 0;
  padding: 0 20px;
`
const Header = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
`

const PostContent = styled.div`
  display: block;
  margin: 20px 0;
  padding: 50px 0;
  border-bottom: 1px solid ${props => props.theme.greenSmoke};
`

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (<ThemeProvider theme={defaultTheme}>
  <>
    <Helmet title="Keeve.me Blog" />
    <Wrapper>
    <Header>
      <Link to="/" style={{textDecoration: 'none', padding: '0 20px'}}>
        <SmDarkText text="Home" />
      </Link>
      <BlogHeadline content="Keevechain"/>
    </Header>
      {posts.filter(post => post.node.excerpt != "").map(({node: post}) => {
        return (<PostContent key={post.frontmatter.title}>
          <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
            <PostHeadline content={post.frontmatter.title} />
          </Link>
          <SmDarkItalicText text={post.frontmatter.date} />
          <SmDarkText text={post.excerpt}/>
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
          }
        }
      }
    }
  }
`
