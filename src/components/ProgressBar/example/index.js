/* eslint-disable react/jsx-key */
import React from 'react';
import ProgressBar from '../index';

export default [
  {
    examples: [
      <ProgressBar
        max="100"
        min="0"
        progress="60"
        topLabel="hola esto es un label"
      />,
    ],
  },
    {
    examples: [
      <ProgressBar
        max="100"
        min="0"
        progress="60"
      />,
    ],
  },
  {
    examples: [
      <ProgressBar
        leftLabel="Allocated traffic"
        max="100"
        min="0"
        progress="60"
        rightLabel="Available traffic"
      />,
    ],
  },
  {
    examples: [
      <ProgressBar
        leftLabel="Allocated traffic"
        min="0"
        max="100"
        progress="60"
        rightLabel="Available traffic"
        topLabel="hola esto es un label"
      />,
    ],
  },
  {
    examples: [
      <ProgressBar
        displayError
        min="0"
        max="100"
        progress="60"
      />,
    ],
  },
];
