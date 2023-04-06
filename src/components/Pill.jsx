import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Pill = ({ label, color }) => {
  return (
    <div className={`pill pill-${color}`}>
      {label}
    </div>
  );
};

Pill.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'red']).isRequired,
};

export default Pill;
