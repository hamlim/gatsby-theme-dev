module.exports = options => {
  const { mdx = true, mdxLayouts = {} } = options

  return {
    siteMetadata: {
      title: `Notes Title Placeholder`,
      description: `Description placeholder`,
      siteUrl: `http://example.com/`,
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            default: require.resolve(`./src/components/layout`),
            ...mdxLayouts,
          },
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/notes`,
          name: options.contentPath || `content/notes`,
        },
      },
      `gatsby-plugin-redirects`,
      `gatsby-plugin-og-image`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [`gatsby-theme-testing`],
        },
      },
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
