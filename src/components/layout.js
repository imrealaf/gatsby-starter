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

//
//  Prop types
//
const propTypes = {
  /**
   *  hasFullHeight
   *  @type boolean
   */
  hasFullHeight: PropTypes.bool,

  /**
   *  children
   *  @type node
   */
  children: PropTypes.node.isRequired
};

//
//  Default props
//
const defaultProps = {
  hasFullHeight: false
};

//
//  Query
//
const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ hasFullHeight, children }) => {
  /**
   *  Get data
   */
  const data = useStaticQuery(query);
  const { title } = data.site.siteMetadata;

  /**
   *  Render
   */
  return (
    <Fragment>
      {/*
       * Global
       */}
      <Helmet>
        <body />
      </Helmet>

      {/*
       * Header
       */}
      <Header
        id="top"
        siteTitle={title}
        threshold={hasFullHeight ? window.innerHeight * 0.8 : 50}
        hasFullHeight={hasFullHeight}
      />

      {/*
       * Main
       */}
      <main>{children}</main>

      {/*
       * Footer
       */}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>

      {/*
       * Scroll-to-top
       */}
      <ScrollToTop anchor="#top" threshold={400}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </Fragment>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
