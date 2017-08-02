import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Label from './index.js';

const stories = storiesOf('Label', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .addWithInfo('default label', () => <div>
        <Label
            isRequired={boolean('isRequired', false)}
            isOptional={boolean('isOptional', false)}>I'm a Label</Label>
    </div>)

