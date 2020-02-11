import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide } from '@material-ui/core';

//
//  Prop types
//
const propTypes = {
  /**
   *  children
   *  @type element
   */
  children: PropTypes.element.isRequired
};

//
//  Prop types
//
const defaultProps = {};

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = propTypes;
HideOnScroll.defaultProps = defaultProps;

export default HideOnScroll;
