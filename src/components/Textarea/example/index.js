/* eslint-disable react/jsx-key */
import React from 'react';
import Textarea from '../index';

export default [
  {
    examples: [
      <Textarea
        placeholder="Enter a comment…"
      />,
    ],
  },
  {
    examples: [
      <Textarea
        isDisabled={ true }
        defaultValue="This textarea is disabled."
      />,
    ],
  },
  {
    examples: [
      /* eslint-disable no-console */
      <Textarea
        defaultValue="This textarea has many event listeners."
        onBlur={ function() { console.log('Textarea: onBlur'); } }
        onChange={ function() { console.log('Textarea: onChange'); } }
        onFocus={ function() { console.log('Textarea: onFocus'); } }
        onInput={ function() { console.log('Textarea: onInput'); } }
        onKeyDown={ function() { console.log('Textarea: onKeyDown'); } }
      />,
    /* eslint-enable no-console */
    ],
  },
];
