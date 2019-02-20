/**
 * a seperate template for individual blog pages is needed when
 * rendering a blog landing page (eg, pages/blog.js is our landing page which shows snippets of all blog posts)
 */


import React from 'react';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default ({ data }) => {

  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`