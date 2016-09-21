/* eslint-disable react/jsx-key */
import React from 'react';
import Input from 'components/Input';

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
        placeholder="Browse by Name"
        isFilter={ true }
      />,
    ],
  },
  {
    examples: [
      <Input
        defaultValue="onChange Example"
        onChange={
          function(event) {
            console.log('onChange', event.target.value); // eslint-disable-line no-console
          }
        }
      />,
    ],
  },
  {
    examples: [
      <Input
        defaultValue="onBlur Example"
        onBlur={
          function(event) {
            console.log('onBlur', event.target.value); // eslint-disable-line no-console
          }
        }
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
      <Input type="date" />,
    ],
  },
];
