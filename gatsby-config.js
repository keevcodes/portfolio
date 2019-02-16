module.exports = {
  siteMetadata: {
    title: 'Keeve.me',
    navigation: [
      {title: 'home', route: '/'},
      {title: 'about', route: '/about/'},
      {title: 'work', route: '/work/'},
      {title: 'contact', route: '/contact/'}
    ],
    home: {
      desc: "Creative web developer based in Hamburg, Germany. I have experience working with brands such as Google, BMW and Adobe. Have a look around to learn more about me and my talents.",
      headline: "Keeve.me"
    },
    about: {
      headline: "About & Skills",
      desc: "My web engineering journey began at the start of 2016 and have been honing my skill set ever since, working for big name clients like Adobe, BMW and Google. I'm passionate about front-end and growing with my team of developers and designers to create beautiful websites. Web development is an ever evolving and fast moving industry which fuels my desire to learn new technologies and experiement with interesting tools. My knowledge and tool set not only includes a solid foundation of HTML, CSS and Javascript, but also some of the latest tools like React, Redux, Webpack and GraphQl.  When not building web pages, I spend my time with my wife Ingrid, my daughter Isabella and my dog Baloo. I enjoy staying active in with boxing, snowboarding and when the weather permits, a good braai in the park."
    },
    work: {
      desc: "",
      headline: "Work & Experience",

      jobs: [
      {
        company: 'Jung von Matt / TECH',
        role: 'Junior Developer',
        date: 'September 2017 - Present',
        responsiblites: 'Frontend application and site development for various clients including Google, BMW and Bilder.de. Introduce ideas and new technologies to team members through presentations. Work with team members in an Agile enviornment and Srum teams.',
        tools: ['React', 'ES6', 'CSS3 (Sass)', 'HTML (HTML5, Twig, Handlebars)', 'Responsive Design','Atomic Design', 'Agile development', 'AMP HTML' ]
      },
      {
        company: 'Track',
        role: 'Junior Developer',
        date: 'January 2017 - August 2017',
        responsiblites: 'Create email templates from scratch and prepare for email campaign shipment through Adobe Campaign tooling.',
        tools: ['HTML', 'CSS', 'Adobe Campaign', 'Email Templating', 'Photoshop']
      }
    ]
  },
  contact: {
    desc: "",
    headline: "Contact.me"
  }
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,

    // relative string paths directly from siteMetaData are not yet supported by gatsbyImage,
    // therefore projects were created as md files to include their images
    // and assocaited data since gatsby knowns the location of the assoicated file paths with gatsby-source-filesystem.
    // more info on this issue can be found here https://github.com/gatsbyjs/gatsby/issues/2968
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`,
      },
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
        path: `${__dirname}/src/pages/posts`,
        name: "markdown-pages",
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-stylelint',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    "gatsby-source-instance-name-for-remark",
    `gatsby-plugin-sharp`,
  ],
}
