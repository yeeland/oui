// This file simulates the functionality that Webpack provides when loading
// SVGs so that Jest, our test runner, can run this file whenever it attempts
// to import an SVG but doesn't recognize it as JavaScript.
//
// More information:
// https://facebook.github.io/jest/docs/tutorial-webpack.html
import React from 'react';

const MockIcon = (props) => {
  return (
    <svg { ...props }></svg>
  );
};

export default MockIcon;
