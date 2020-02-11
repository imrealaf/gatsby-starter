import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  List,
  ListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { HideOnScroll } from './hoc';
import Burger from './ui/burger';
import useElevationOnScroll from '../hooks/useElevationOnScroll';
import useToggle from '../hooks/useToggle';

//
//  Prop types
//
const propTypes = {
  /**
   *  id
   *  @type string
   */
  id: PropTypes.string,

  /**
   *  siteTitle
   *  @type string
   */
  siteTitle: PropTypes.string,

  /**
   *  threshold
   *  @type number
   */
  threshold: PropTypes.number,

  /**
   *  hasFullHeight
   *  @type boolean
   */
  hasFullHeight: PropTypes.bool
};

//
//  Default props
//
const defaultProps = {
  siteTitle: '',
  threshold: 50,
  hasFullHeight: false
};

//
//  Styles
//
const useStyles = makeStyles(theme => ({
  appBar: props => ({
    background:
      !props.elevated && props.hasFullHeight
        ? 'transparent'
        : theme.palette.primary.main
  }),
  logo: {
    marginBottom: 0,
    color: '#ffffff',
    fontSize: '20px',
    display: 'inline-block'
  }
}));

const Header = props => {
  /**
   *  Destructure props
   */
  const { id, siteTitle, threshold } = props;

  /**
   *  Elevation
   */
  const elevated = useElevationOnScroll(threshold);

  /**
   *  Classes
   */
  const classes = useStyles({ elevated, ...props });

  /**
   *  Sidenav control api
   */
  const nav = useToggle();

  /**
   *  Render
   */
  return (
    <header id={id}>
      {/*
       * Navbar
       */}
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} elevation={elevated ? 4 : 0}>
          <Toolbar>
            <Link className={classes.logo} to="/">
              {siteTitle}
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/*
       * Side Nav
       */}
      <Drawer bgcolor="primary.main" anchor="right" open={nav.active}>
        <Box width={300}>
          <List>
            <ListItem>
              <Link to="/page-2">Item 1</Link>
            </ListItem>
            <ListItem>Item 2</ListItem>
          </List>
        </Box>
      </Drawer>

      {/*
       * Burger
       */}
      <Burger pos="fxd" active={nav.active} onClick={nav.toggle} />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
