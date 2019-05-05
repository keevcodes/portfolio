module.exports = {
  siteMetadata: {
    title: "Andrew McKeever's web devlopement portfolio",
    // gatsby-transformer-json ext supports only allPageDataJson attr in graphql.
    // the structure of that data isn't similar enough to place nav and footer data there.
    navigation: [
      {title: 'home', route: '/'},
      {title: 'about', route: '/about/'},
      {title: 'work', route: '/work/'},
      {title: 'blog', route: '/blog/'}
    ],
    footer: [
      {icon: 'linkedin', link: 'https://www.linkedin.com/in/andrew-mckeever-01974371/'},
      {icon: 'twitter', link: 'https://twitter.com/keev_me'},
      {icon: 'xing', link: 'https://www.xing.com/profile/Andrew_McKeever/cv'},
      {icon: 'github', link: 'https://github.com/keevkeev'},
      {icon: 'mail', link: 'mailto:andmckvr@gmail.com'}
    ]
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-svg-sprite',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog-posts",
        path: `${__dirname}/src/pages/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "skills",
        path: `${__dirname}/src/assets/skills/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
    // relative string paths not yet supported by gatsbyImage and variables can not be used in static queries,
    // therefore projects were created as md files to include their images
    // and assocaited data since gatsby knowns the location of the assoicated file paths with gatsby-source-filesystem.
    // more info on this issue can be found here https://github.com/gatsbyjs/gatsby/issues/2968
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`}
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    "gatsby-source-instance-name-for-remark",
    `gatsby-plugin-sharp`,
  ],
}
