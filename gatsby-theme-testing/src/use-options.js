import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      notesConfig(id: { eq: "gatsby-theme-testing-config" }) {
        basePath
        homeText
        breadcrumbSeparator
      }
    }
  `)

  return data.notesConfig
}
