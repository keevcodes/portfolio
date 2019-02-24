module.exports = {
  siteMetadata: {
    title: 'Keeve.me',
    navigation: [
      {title: 'home', route: '/'},
      {title: 'about', route: '/about/'},
      {title: 'work', route: '/work/'},
      {title: 'blog', route: '/blog/'}
    ],
    footer: [
      {icon: 'linkedin', link: ''},
      {icon: 'twitter', link: ''},
      {icon: 'xing', link: 'https://www.xing.com/profile/Andrew_McKeever/cv'},
      {icon: 'github', link: 'https://github.com/keevkeev'},
      {icon: 'gmail', link: 'mailto:andmckvr@gmail.com'}
    ]
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        },
        name: 'Icon'
      },
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
      options: {
        name: "projects",
        path: `${__dirname}/src/assets/project-images/`,
      },
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
