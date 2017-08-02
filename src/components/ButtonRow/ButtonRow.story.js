import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import ButtonRow from './index.js';
import Button from '../Button';

const stories = storiesOf('ButtonRow', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
    .addWithInfo('button row skip step', () => <div>
    <ButtonRow
    leftGroup={[
        <Button key="1" style="plain" width="default">Skip this step</Button>
    ]}
    rightGroup={[
        <Button key="1" style="plain" width="default">Plain Button</Button>,
        <Button key="2" style="highlight" width="default">Highlight Button</Button>
    ]}
    />
    </div>)
    .addWithInfo('buttons centered', () => <div>
        <ButtonRow centerGroup={[
            <Button key="1" style="outline" width="default">Center Button</Button>,
            <Button key="2" style="highlight" width="default">Center Button</Button>
        ]}/>
    </div>)
    .addWithInfo('buttons fullwidth', () => <div>
        <ButtonRow centerGroup={[
            <Button key="1" style="outline" width="full">Full Width</Button>,
            <Button key="2" style="outline" width="full">Full Width</Button>,
            <Button key="3" style="highlight" width="full">Full Width</Button>
        ]}/>
    </div>);


