import { useEffect } from 'react';
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

const propTypes = {
  id: PropTypes.string,
  siteTitle: PropTypes.string,
  threshold: PropTypes.number,
  hasFullHeight: PropTypes.bool
};

const defaultProps = {
  siteTitle: '',
  threshold: 50,
  hasFullHeight: false
};

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
  const { id, siteTitle, threshold } = props;
  const elevated = useElevationOnScroll(threshold);
  const classes = useStyles({ elevated, ...props });
  const nav = useToggle();

  return (
    <header id={id}>
      {/* <Toolbar id={id} /> */}
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} elevation={elevated ? 4 : 0}>
          <Toolbar>
            <Link className={classes.logo} to="/">
              {siteTitle}
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer bgcolor="primary.main" anchor="top" open={nav.active}>
        <Box
          bgcolor="primary.main"
          color="background.paper"
          width="100%"
          height="100%"
          textAlign="center"
        >
          <List>
            <ListItem>
              <Link to="/page-2">Item 1</Link>
            </ListItem>
            <ListItem>Item 2</ListItem>
          </List>
        </Box>
      </Drawer>
      <Burger pos="fxd" active={nav.active} onClick={nav.toggle} />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
