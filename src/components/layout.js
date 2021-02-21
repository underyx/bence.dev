import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Divider from './divider';
import Footer from './footer';
import Header from './header';
import './body.css';

const Main = styled.main`
  margin: 0 auto;
  padding: 0 0.5rem 0.5rem;
  max-width: 610px;
`;

const Layout = ({ children, title }) => (
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
    render={(data) => (
      <Main>
        <Helmet
          title={`${title} of ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: "underyx's personal website" },
            { name: 'keywords', content: 'bence nagy, underyx' },
          ]}
        >
          <html lang="en" />
          <meta charSet="utf-8" />
        </Helmet>
        <Header />
        <Divider />
        <article>{children}</article>
        <Divider scale={0.8} />
        <Footer />
      </Main>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
