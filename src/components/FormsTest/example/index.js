/* eslint-disable react/jsx-key */
import React from 'react';
import FormsTest from '../index';
import Button from '../../Button';
import Input from '../../Input';

export default [
  {
    examples: [
      <FormsTest
        variation='variation_1'
        trafficDistribution={ 50 }
        description='Homepage headline test'
        isDismissible={ true }
        rows={
          [
            [
              <Input
                type="text"
                value="variation_1"
                label="Variation Key"
                placeholder="This is a placeholder"
              />,
              <div>
                <Input
                  type="text"
                  value="50.0"
                  label="Traffic Distribution"
                  placeholder="50.0"
                /> <span>%</span>
              </div>,
            ],
            [
              <Input
                type="text"
                value="variation_1"
                label="Description"
                placeholder="This is a placeholder"
              />,
            ],
            [
              <p>
                A.
              </p>,
              <Input
                type="text"
                value="variable_1"
                label="Live Variable Key"
                placeholder="This is a placeholder"
              />,
              <Input
                type="text"
                value=""
                label="Value"
                placeholder="variable_1"
              />,
              <Input
                type="text"
                value="variable_1"
                label="Live Variable Key"
                placeholder="This is a placeholder"
              />,
              <Button
                style="link"
                hasLinkColor={ true }>
                Delete
              </Button>,
            ],
          ]
        } >
      </FormsTest>,
    ],
  },
];
