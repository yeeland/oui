/* eslint-disable react/jsx-key */
import React from 'react';
import Token from 'components/Token';

export default [
  {
    examples: [
      <Token
        name="Duck"
        testSection="token-test"
      />,
      <Token
        name="Duck"
        style="primary"
      />,
      <Token
        name="Goose"
        style="primary"
        testSection="goose"
        isDismissible={ true }
        onDismiss={
          function() {
	          alert('Hello!'); // eslint-disable-line
          }
        }
      />,
    ],
  },
];
