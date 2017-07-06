/* eslint-disable react/jsx-key */
import React from 'react';
import Label from '../index';

export default [
  {
    examples: [
      <Label>I'm a Label</Label>,
    ],
  },
  {
    examples: [
      <Label isRequired>I'm a Required Label</Label>,
    ],
  },
  {
    examples: [
      <Label isOptional>I'm an Optional Label</Label>,
    ],
  },
  {
    examples: [
      <Label displayError>I'm a Label with an error</Label>,
    ],
  },
  {
    examples: [
      <Label>
        <div>When I have nodes,</div>
        <div>I'm unstyled</div>
      </Label>,
    ],
  },
];
