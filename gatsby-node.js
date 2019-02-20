/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * allMarkdownRemark by default returns all markdown files so a filter
 * was added to return on those posts categorized as blogs.
 */



const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/templates/blogPost.js`)

  return graphql(`
    {
      allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {frontmatter: {category: {eq: "blog"}}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate
      })
    })
  })
}