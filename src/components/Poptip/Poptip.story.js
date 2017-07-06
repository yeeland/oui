import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';

import Poptip from './index.js';
import Button from '../Button';

const stories = storiesOf('Poptip', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="rooty">
      {story()}
    </div>
  ));

stories
  .addWithInfo('basic poptip', () => <div className="position--relative height--100">
    <Poptip className="text--center" content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!">
        <Button width="default">
        Basic Poptip
        </Button>
    </Poptip>
    </div>)
    .addWithInfo('poptip to the right', () => <div className="position--relative height--100"> 
        <Poptip
            content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
            horizontalAttachment="left"
            horizontalTargetAttachment="right"
            verticalAttachment="middle"
            verticalTargetAttachment="middle">
            <Button style="unstyled" width="default">
                <a>Poptip on the right</a>
            </Button>
        </Poptip>
    </div>)
    .addWithInfo('poptip with advanced positioning', () => <div className="position--relative height--100">
        <Poptip
            content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
            horizontalAttachment="left"
            horizontalTargetAttachment="left"
            verticalAttachment="top"
            verticalTargetAttachment="bottom">
            <Button width="default">
                Poptip With Advanced Positioning
            </Button>
        </Poptip>
    </div>);
