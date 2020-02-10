import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const propTypes = {
  anchor: PropTypes.string,
  threshold: PropTypes.number,
  children: PropTypes.element.isRequired
};

const defaultProps = {
  threshold: 200
};

const ScrollToTop = props => {
  const { anchor, threshold, children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  });

  const handleClick = () => {
    const anchorElement =
      anchor && document.querySelector(anchor)
        ? document.querySelector(anchor)
        : document.body;

    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
