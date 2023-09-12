import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => {
  const [containerStyle] = useState(s.container);

  return <div className={containerStyle}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
