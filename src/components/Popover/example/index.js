/* eslint-disable react/jsx-key */
import React from 'react';
import Popover from '../index';
import Button from '../../Button';

export default [
  {
    examples: [
      <div className="position--relative">
        <Button jsSelector="popover-demo-button">Popover Target</Button>
        <Popover
          title="Lorem ipsum dolor sit amet"
          isVisible={ true }
          targetElement="[data-js-selector='popover-demo-button']">
          <p>
            Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
            nihil libero et, hic!
          </p>
        </Popover>
      </div>
    ],
  },
];
