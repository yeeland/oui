/* eslint-disable react/jsx-key */
import React from 'react';
import Popover from '../index';
import Button from '../../Button';

export default [
  {
    examples: [
      <div className="position--relative">
        <Popover
          title="Lorem ipsum dolor sit amet"
          isVisible={ true }
          targetElement={ <Button>Popover Target</Button> }
          isContstrainedToViewport={ true }>
          <p>
            Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
            nihil libero et, hic!
          </p>
        </Popover>
      </div>,
    ],
  },
];
