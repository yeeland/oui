import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';

import Input from './index.js';

const stories = storiesOf('Input', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="rooty">
      {story()}
    </div>
  ));

stories
  .addWithInfo('input with knobs', () => {

    return(<Input 
              defaultValue={text('defaultValue', 'some default value')}
              placeholder={text('placeholder', 'just a placeholder')}
              label={text('Label', '')}
              type={select('type', ['text', 'password', 'number', 'date'], 'text')}
              isFilter={boolean('isFilter', false)}
              isDropdown={boolean('isDropdown', true)}
              isOptional={boolean('isOptional', false)}
              max={number('max', 50)}
              min={number('min', 10)}
              onChange={ action('on change') }
              onBlur={ action('on blur') }
              onKeyDown={ action('on key press') }
          /> );
  });
