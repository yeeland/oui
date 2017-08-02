import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';

import ButtonRow from '../ButtonRow';
import Button from './index.js';
import ArrowsInline from '../ArrowsInline';

const stories = storiesOf('Button', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .addWithInfo('all buttons', () => <ButtonRow
      centerGroup={[
        <Button isActive={boolean('isActive', false)} width="default">Button</Button>,
        <Button isActive={boolean('isActive', false)} style="highlight" width="default">Highlight</Button>,
        <Button isActive={boolean('isActive', false)} style="danger" width="default">Danger</Button>,
        <Button isActive={boolean('isActive', false)} style="danger-outline" width="default">Danger Outline</Button>,
        <Button isActive={boolean('isActive', false)} style="outline" width="default">Outline</Button>,
        <Button isActive={boolean('isActive', false)} style="plain" width="default">Plain</Button>,
        <Button isActive={boolean('isActive', false)} style="toggle" width="default">Toggle</Button>
      ]}
    />)
  .add('all disabled', () => <ButtonRow
      centerGroup={[
        <Button isDisabled width="default">Button</Button>,
        <Button isDisabled style="highlight" width="default">Highlight</Button>,
        <Button isDisabled style="danger" width="default">Danger</Button>,
        <Button isDisabled style="danger-outline" width="default">Danger Outline</Button>,
        <Button isDisabled style="outline" width="default">Outline</Button>,
        <Button isDisabled style="plain" width="default">Plain</Button>,
        <Button isDisabled style="toggle" width="default">Toggle</Button>
      ]}
    />)
  .addWithInfo('default', () => <Button width={select('width', ['default', 'full'], 'default')}>default</Button>)
  .add('underline button', () => <Button style="underline" width="default">Underline Button <ArrowsInline direction="down" /></Button>)
  .add('sizes variations', () => <ButtonRow
      centerGroup={[
        <Button  width="default" size="tiny">Tiny Button</Button>,
        <Button width="default" size="small">Small Button</Button>,
        <Button width="default" size="large">Large Button</Button>,
        <Button width="default" size="narrow">Narrow Button</Button>,
        <Button width="default" size="tight">Tight Button</Button>
      ]}
    />);
