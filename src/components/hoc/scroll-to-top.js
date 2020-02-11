import React from 'react';
import PropTypes from 'prop-types';
import { Zoom, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//
//  Prop types
//
const propTypes = {
  /**
   *  anchor
   *  @type string
   */
  anchor: PropTypes.string,

  /**
   *  threshold
   *  @type number
   */
  threshold: PropTypes.number,

  /**
   *  children
   *  @type element
   */
  children: PropTypes.element.isRequired
};

//
//  Default props
//
const defaultProps = {
  threshold: 200
};

//
//  Styles
//
const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const ScrollToTop = props => {
  /**
   *  Destructure props
   */
  const { anchor, threshold, children } = props;

  /**
   *  Classes
   */
  const classes = useStyles();

  /**
   *  Scroll trigger
   */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  });

  /**
   *  Click handler
   *  @description when component is clicked, scroll to top of page
   */
  const handleClick = () => {
    const anchorElement =
      anchor && document.querySelector(anchor)
        ? document.querySelector(anchor)
        : document.body;

    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /**
   *  Render
   */
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

ScrollToTop.propTypes = propTypes;
ScrollToTop.defaultProps = defaultProps;

export default ScrollToTop;
