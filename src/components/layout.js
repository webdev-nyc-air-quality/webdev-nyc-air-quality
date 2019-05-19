import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'

const Layout = ({ children, siteTitle, subpageTitle }) => (
  <main style={styles.main}>
    <Helmet
      titleTemplate={`%s - ${siteTitle}`}
      defaultTitle={siteTitle}
      title={subpageTitle}
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
    <Header siteTitle={siteTitle} subpageTitle={subpageTitle} />
    <section style={styles.section}>{children}</section>
  </main>
)

const styles = {
  main: {
    height: 'calc(100vh - 3.5rem)',
  },
  section: {
    height: '100%',
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
