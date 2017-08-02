import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';

import Token from './index.js';

const stories = storiesOf('Token', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', () => <div>
    <Token
        name="Duck"
        style="secondary"
        testSection="token-test"
    />
    <Token
        name="Duck"
        style="primary"
    />
    <Token
        isDismissible
        name="Goose"
        onDismiss={function (){alert("Hello!")}}
        style="primary"
        testSection="goose"
    />
  </div>)
  .add('draggable', () => <Token
    description="A popular childhood game."
    isDismissible
    isDraggable
    name="Duck Duck Goose"
    onDismiss={function (){alert("Hello!")}}
    order={1}
    style="primary"
    />)