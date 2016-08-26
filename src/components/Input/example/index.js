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
        placeholder="Browse by Name"
        isFilter={ true }
      />,
    ],
  },
  {
    examples: [
      <Input
        type="number"
        defaultValue="42"
        onChange={
          function(event) {
            console.log(event.target.value); // eslint-disable-line no-console
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
