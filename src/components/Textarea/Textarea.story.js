import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Textarea from './index.js';

const stories = storiesOf('Textarea', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="rooty">
      {story()}
    </div>
  ));

stories
  .addWithInfo('textarea with knobs', () => <div>
        <Textarea 
            isDisabled={boolean('isDisabled', false)} 
            defaultValue="Delete this default value and see the placeholder"
            placeholder={text('placeHolder', 'Enter a comment')}
            onBlur={action("Textarea: onBlur")}
            onChange={action("Textarea: onChange")}
            onFocus={action("Textarea: onFocus")}
            onInput={action("Textarea: onInput")}
            onKeyDown={action("Textarea: onKeyDown")}/>
    </div>)

