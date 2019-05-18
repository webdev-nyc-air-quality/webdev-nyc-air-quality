import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children, data, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main style={styles.main}>
        <Helmet
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang='en' />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossorigin='anonymous'
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} subpageTitle={title} />
        <section style={styles.section}>{children}</section>
      </main>
    )}
  />
)

const styles = {
  main: {
    height: 'calc(100vh - 75px)',
  },
  section: {
    height: '100%',
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
