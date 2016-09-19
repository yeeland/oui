/* eslint-disable react/jsx-key */
import React from 'react';
import OverlayTrigger from '../index';

import Button from '../../Button/';
import Popover from '../../Popover/';

export default [
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayTrigger
          overlay={
            <Popover title="Lorem ipsum dolor sit amet">
              <p>
                Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
                nihil libero et, hic!
              </p>
            </Popover>
          }
          overylayIsVisibleProp='isVisible'
          isContstrainedToViewport={ true }
          horizontalAttachment="left"
          horizontalTargetAttachment="right"
          verticalAttachment="middle"
          verticalTargetAttachment="middle">
          <Button>Open Popover</Button>
        </OverlayTrigger>
      </div>,
    ],
  },
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayTrigger
          overlay={
            <Popover title="Lorem ipsum dolor sit amet">
              <p>
                Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
                nihil libero et, hic!
              </p>
            </Popover>
          }
          overylayIsVisibleProp='isVisible'
          isContstrainedToViewport={ true }
          horizontalAttachment="left"
          horizontalTargetAttachment="left"
          verticalAttachment="top"
          verticalTargetAttachment="bottom">
          <Button>Open Popover</Button>
        </OverlayTrigger>
      </div>,
    ],
  },
];
