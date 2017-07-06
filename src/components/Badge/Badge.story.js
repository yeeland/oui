import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Badge from './index.js';
import ArrowsInline from '../ArrowsInline';

const stories = storiesOf('Badge', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="rooty">
      {story()}
    </div>
  ));

stories
  .add('all badges', () => <div>
        <Badge color="default">Default</Badge>
        <Badge color="draft">Draft</Badge>
        <Badge color="live">Live</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="plain">Plain</Badge>
    </div>)
  .addWithInfo('with text', () => <div className="flex flex-align--center">
          <Badge color="draft">1</Badge>{ text('text', 'Unpublished Change')}
      </div>
  )
  .add('with numbers', () => <div>
    <Badge color="draft">{ number('draft number', 9)}</Badge>
    <Badge color="live">{ number('light number', 9)}</Badge>
    </div>
    );
