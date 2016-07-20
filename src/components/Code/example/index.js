/* eslint-disable react/jsx-key */
import React from 'react';
import Code from '../index';

export default [
  {
    examples: [
      <Code type="block">
{ `var foo = 'bar';
var bat = 'baz';` }
      </Code>,
    ],
  },
  {
    examples: [
      <Code type="block" isHighlighted={ true } language="javascript">
{ `var highlightedFoo = 'bar';
var highLightedBat = 'baz';` }
      </Code>,
    ],
  },
  {
    examples: [
      <Code type="inline">var foo;</Code>,
    ],
  },
];
