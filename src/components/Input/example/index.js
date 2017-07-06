/* eslint-disable react/jsx-key */
import React from 'react';
import Input from '../index';

export default [
  {
    examples: [
      <Input
        type="text"
        label="Label"
        note="This is a note"
        placeholder="This is a placeholder"
        isRequired
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        label="Label with error state"
        note="This is a note with error state"
        displayError
        placeholder="This is a placeholder with error state"
        isRequired
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        placeholder="This is a placeholder with an error"
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        displayError
        placeholder="This is a placeholder"
      />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        placeholder="Browse by Name"
        isFilter
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
        isOptional
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
