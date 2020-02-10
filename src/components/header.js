import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { HideOnScroll, ScrollToTop } from './hoc';

const propTypes = {
  siteTitle: PropTypes.string
};

const defaultProps = {
  siteTitle: ''
};

const Header = props => (
  // <header className="uk-position-top" style={{ zIndex: '1050' }}>
  //   <nav
  //     className="uk-navbar-container uk-navbar-transparent"
  //     data-uk-navbar
  //     data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;"
  //   >
  //     <div className="uk-navbar-center">
  //       <div className="uk-navbar-center-left">
  //         <div>
  //           <ul className="uk-navbar-nav">
  //             <li>
  //               <a href="#">Parent</a>
  //               <div className="uk-navbar-dropdown">
  //                 <ul className="uk-nav uk-navbar-dropdown-nav">
  //                   <li className="uk-active">
  //                     <a href="#">Active</a>
  //                   </li>
  //                   <li>
  //                     <a href="#">Item</a>
  //                   </li>
  //                   <li>
  //                     <a href="#">Item</a>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <a className="uk-navbar-item uk-logo" href="#">
  //         {siteTitle}
  //       </a>
  //       <div className="uk-navbar-center-right">
  //         <div>
  //           <ul className="uk-navbar-nav">
  //             <li>
  //               <a href="#">Item</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // </header>
  <React.Fragment>
    <Toolbar id="back-to-top-anchor" />
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>Logo here</Toolbar>
      </AppBar>
    </HideOnScroll>

    <ScrollToTop anchor="#back-to-top-anchor" threshold={400} {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTop>
  </React.Fragment>
);

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
