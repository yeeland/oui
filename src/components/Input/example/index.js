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
        isRequired={ true }
      />,
    ],
  },
  {
    examples: [
      <Input type="text" label="Hello" displayError={ true } />,
    ],
  },
  {
    examples: [
      <Input
        type="text"
        label="Label with error state"
        note="This is a note with error state"
        displayError={ true }
        placeholder="This is a placeholder with error state"
        isRequired={ true }
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
        displayError={ true }
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
