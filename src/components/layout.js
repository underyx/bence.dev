import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const Content = styled.main`
  margin: 0 auto;
  max-width: 810px;
  padding: 0 0.5rem 0.5rem;
`

const Layout = ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "underyx's personal website" },
            { name: 'keywords', content: 'bence nagy, underyx' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
