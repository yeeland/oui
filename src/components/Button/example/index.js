/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../index';

export default [
  {
    isPadded: true,
    examples: [
      <Button>Button</Button>,
      <Button style="highlight">Highlight Button</Button>,
      <Button style="danger">Danger Button</Button>,
      <Button style="outline">Outline Button</Button>,
      <Button style="plain">Plain Button</Button>,
      <Button style="toggle">Toggle Button</Button>,
    ],
  },
  {
    backgroundColor: 'brand-dark',
    isPadded: true,
    examples: [
      <Button style="outline-reverse">Outline Reverse Button</Button>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <Button isDisabled={ true }>Disabled Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button size="small">Small Button</Button>,
      <Button size="large">Large Button</Button>,
      <Button size="narrow">Narrow Button</Button>,
      <Button size="tight">Tight Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button size="full">Full Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button
        onClick={ function() {
          alert('Hello!'); //eslint-disable-line
        } }>
        Button with Function
      </Button>,
    ],
  },
];
