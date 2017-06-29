/* eslint-disable react/jsx-key */
import React from 'react';
import Input from '../index';

export default [
  {
    examples: [
      <Input
        type="text"
        placeholder="This is a placeholder"
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        label="Test"
        hasError={ true }
        placeholder="This is a placeholder"
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        placeholder="Browse by Name"
        isFilter={ true }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        defaultValue="onChange Example"
        onChange={ function(event) {
          console.log('onChange', event.target.value); // eslint-disable-line no-console
        } }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        defaultValue="onBlur Example"
        onBlur={ function(event) {
          console.log('onBlur', event.target.value); // eslint-disable-line no-console
        } }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        defaultValue="onKeyDown Example"
        onKeyDown={ function(event) {
          console.log('onKeyDown', event.target.value); // eslint-disable-line no-console
        } }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        label="Label with Optional"
        isOptional={ true }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="password"
        label="Password"
        testSection="input"
      />,
    ],
  },
  {
    examples: [
      <Input type="number" min={ 10 } max={ 50 } />,
    ],
  },
  {
    examples: [
      <Input type="date" />,
    ],
  },
];
