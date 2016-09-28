/* eslint-disable react/jsx-key */
import React from 'react';
import OverlayWrapper from '../index';

import Button from 'components/Button/';
import Popover from 'components/Popover/';
import Poptip from 'components/Poptip/';

export default [
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayWrapper
          overlay={
            <Popover title="Lorem ipsum dolor sit amet">
              <p>
                Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
                nihil libero et, hic!
              </p>
            </Popover>
          }>
          <Button>Open Popover</Button>
        </OverlayWrapper>
      </div>,
    ],
  },
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayWrapper
          overlay={
            <Poptip>
              Ipsa officiis bad-news minus earum a aperiam!
            </Poptip>
          }>
          <Button>Open Poptip</Button>
        </OverlayWrapper>
      </div>,
    ],
  },
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayWrapper
          overlay={
            <Popover title="Lorem ipsum dolor sit amet">
              <p>
                Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
                nihil libero et, hic!
              </p>
            </Popover>
          }
          horizontalAttachment="left"
          horizontalTargetAttachment="right"
          verticalAttachment="middle"
          verticalTargetAttachment="middle">
          <Button>Open Popover</Button>
        </OverlayWrapper>
      </div>,
    ],
  },
  {
    examples: [
      <div className="position--relative height--100">
        <OverlayWrapper
          overlay={
            <Popover title="Lorem ipsum dolor sit amet">
              <p>
                Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae
                nihil libero et, hic!
              </p>
            </Popover>
          }
          horizontalAttachment="left"
          horizontalTargetAttachment="left"
          verticalAttachment="top"
          verticalTargetAttachment="bottom">
          <Button>Open Popover</Button>
        </OverlayWrapper>
      </div>,
    ],
  },
];
