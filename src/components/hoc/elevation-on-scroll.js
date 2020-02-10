import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const propTypes = {
  children: PropTypes.element.isRequired
};

const defaultProps = {};

const ElevationOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

ElevationOnScroll.propTypes = propTypes;
ElevationOnScroll.defaultProps = defaultProps;

export default ElevationOnScroll;
