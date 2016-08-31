/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../../Button';
import ButtonRow from '../';

export default [
  {
    examples: [
      <ButtonRow
        leftGroup={ [
          <Button key="1" style="plain">Skip this step</Button>,
        ] }
        rightGroup={ [
          <Button key="1" style="plain">Plain Button</Button>,
          <Button key="2" style="highlight">Highlight Button</Button>,
        ] }
      />,
    ],
  },
];
