import React from 'react';
import PropTypes from 'prop-types';

export const Block = ({ aspectRatio, style, children, ...rest }) => {
  let wrapperStyles = {
    position: 'relative',
    display: 'block',
    height: 0,
  };

  switch (aspectRatio) {
    case 'square':
      wrapperStyles.paddingTop = '100%';
      break;
    case 'wide':
      wrapperStyles.paddingTop = '75%';
      break;
    case 'wider':
      wrapperStyles.paddingTop = '56.25%';
      break;
    case 'widest':
      wrapperStyles.paddingTop = '42.1875%';
      break;
    case 'tall':
      wrapperStyles.paddingTop = '133.333333%';
      break;
    case 'taller':
      wrapperStyles.paddingTop = '177.777778%';
      break;
    case 'tallest':
      wrapperStyles.paddingTop = '233.333333%';
      break;
    default:
      break;
  }

  return aspectRatio ? (
    <div style={{ ...wrapperStyles, ...style }} {...rest}>
      <div>{children}</div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

Block.defaultProps = {
  style: {},
};

Block.propTypes = {
  aspectRatio: PropTypes.oneOf(['square', 'wide', 'wider', 'widest', 'tall', 'taller', 'tallest']),
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
