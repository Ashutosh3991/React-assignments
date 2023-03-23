import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ children, onClick }) => (
  <button className="icon-button" onClick={onClick}>
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
