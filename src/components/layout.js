import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Helmet from 'react-helmet';

import 'uikit';
import '../styles/index.scss';
import { ScrollToTop } from './hoc';
import Header from './header';

const Layout = ({ hasFullHeight, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <Fragment>
      <Helmet>
        <body />
      </Helmet>
      <Header
        id="top"
        siteTitle={title}
        threshold={hasFullHeight ? window.innerHeight * 0.8 : 50}
        hasFullHeight={hasFullHeight}
      />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      <ScrollToTop anchor="#top" threshold={400}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </Fragment>
  );
};

Layout.propTypes = {
  hasFullHeight: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  hasFullHeight: false
};

export default Layout;
