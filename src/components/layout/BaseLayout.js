import React from 'react';
import Header from './Header';

const componentName = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default componentName;
