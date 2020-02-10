import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  siteTitle: PropTypes.string
};

const defaultProps = {
  siteTitle: ''
};

const Header = ({ siteTitle }) => (
  <header className="uk-position-top" style={{ zIndex: '1050' }}>
    <nav
      className="uk-navbar-container uk-navbar-transparent"
      data-uk-navbar
      data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;"
    >
      <div className="uk-navbar-center">
        <div className="uk-navbar-center-left">
          <div>
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a className="uk-navbar-item uk-logo" href="#">
          {siteTitle}
        </a>
        <div className="uk-navbar-center-right">
          <div>
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
