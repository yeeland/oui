/* eslint-disable react/jsx-key */
import React from 'react';
import Checkbox from '../index';

export default [
  {
    examples: [
      <Checkbox
        defaultChecked={ false }
        label="onChange Example"
        onChange={ function(event) {
          console.log('onChange', event.target.checked); // eslint-disable-line no-console
        } }
      />,
    ],
  },
  {
    examples: [
      <div>
        <Checkbox
          label="First Value"
        />
        <Checkbox
          label="Second Value"
        />
        <Checkbox
          label="Third Value"
        />
      </div>,
    ],
  },
  {
    examples: [
      <Checkbox
        defaultChecked={ true }
        label="Checked by default"
      />,
    ],
  },
  {
    examples: [
      <Checkbox
        isDisabled={ true }
        defaultChecked={ true }
        label="Disabled checkbox"
      />,
    ],
  },
];
