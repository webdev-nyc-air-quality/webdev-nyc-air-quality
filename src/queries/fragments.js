import { graphql } from 'gatsby'

export const variableName = graphql`
  fragment SiteTitle on Site {
    siteMetadata {
      title
    }
  }
`
