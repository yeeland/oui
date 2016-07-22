/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../../Button';
import ButtonRow from '../';

export default [
  {
    examples: [
      <ButtonRow
        leftGroup={ [
          <Button style="plain">Skip this step</Button>,
        ] }
        rightGroup={ [
          <Button style="plain">Plain Button</Button>,
          <Button style="highlight">Highlight Button</Button>,
        ] }
      />,
    ],
  },
];
