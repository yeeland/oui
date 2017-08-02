import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Table from './index.js';
import Button from '../Button';

const stories = storiesOf('Table', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
    .addWithInfo('default', () => <div>
        <Table density="loose" tableLayoutAlgorithm="fixed">
        <Table.THead>
            <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
            </Table.TR>
        </Table.THead>
        <Table.TBody>
            <Table.TR>
            <Table.TD> Header CTA </Table.TD>
            <Table.TD width="20%"> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
            </Table.TR>
            <Table.TR>
            <Table.TD> Larger search bar </Table.TD>
            <Table.TD> 6.7% </Table.TD>
            <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
            <Table.TD> Center aligned headline </Table.TD>
            <Table.TD> 9.3% </Table.TD>
            <Table.TD> Running </Table.TD>
            </Table.TR>
        </Table.TBody>
        </Table>
    </div>)
    .addWithInfo('loose & rule style', () => <div>
        <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
            <Table.THead>
                <Table.TR>
                    <Table.TH> Experiment </Table.TH>
                    <Table.TH isNumerical> Conversion Rate </Table.TH>
                    <Table.TH> Status </Table.TH>
                </Table.TR>
            </Table.THead>
            <Table.TBody>
                <Table.TR>
                    <Table.TD> Header CTA </Table.TD>
                    <Table.TD isNumerical> 12% </Table.TD>
                    <Table.TD> Paused </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD> Shorter Contact Form </Table.TD>
                    <Table.TD isNumerical> 4% </Table.TD>
                    <Table.TD> Draft </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD> Larger search bar </Table.TD>
                    <Table.TD isNumerical> 6.7% </Table.TD>
                    <Table.TD> Paused </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD> Center aligned headline </Table.TD>
                    <Table.TD isNumerical> 9.3% </Table.TD>
                    <Table.TD> Running </Table.TD>
                </Table.TR>
            </Table.TBody>
        </Table>
    </div>)
    .addWithInfo('tight & no bottom border', () => <div>
        <Table density="tight" style="rule-no-bottom-border" tableLayoutAlgorithm="fixed">
        <Table.THead>
            <Table.TR>
                <Table.TH>Experiment </Table.TH>
                <Table.TH isNumerical> Conversion Rate </Table.TH>
                <Table.TH> Status </Table.TH>
            </Table.TR>
        </Table.THead>
        <Table.TBody>
            <Table.TR>
                <Table.TD> Header CTA </Table.TD>
                <Table.TD isNumerical> 12% </Table.TD>
                <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD> Shorter Contact Form </Table.TD>
                <Table.TD isNumerical> 4% </Table.TD>
                <Table.TD> Draft </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD> Larger search bar </Table.TD>
                <Table.TD isNumerical> 6.7% </Table.TD>
                <Table.TD> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD> Center aligned headline </Table.TD>
                <Table.TD isNumerical> 9.3% </Table.TD>
                <Table.TD> Running </Table.TD>
            </Table.TR>
        </Table.TBody>
        </Table>
    </div>)
    .addWithInfo('dome', () => <div>
        <Table density="tight" style="wall" tableLayoutAlgorithm="auto">
        <Table.THead>
            <Table.TR>
                <Table.TH> Experiment </Table.TH>
                <Table.TH isNumerical width="20%" >Conversion Rate </Table.TH>
                <Table.TH isCollapsed> Status </Table.TH>
            </Table.TR>
        </Table.THead>
        <Table.TBody>
            <Table.TR>
                <Table.TD verticalAlign="middle"> Header CTA </Table.TD>
                <Table.TD isNumerical verticalAlign="middle"> 12% </Table.TD>
                <Table.TD verticalAlign="middle">
                <Button size="small" width="default"> Start </Button>
            </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD verticalAlign="middle"> Shorter Contact Form </Table.TD>
                <Table.TD isNumerical verticalAlign="middle" > 4% </Table.TD>
                <Table.TD verticalAlign="middle">
                <Button size="small" width="default" > Start </Button>
            </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD verticalAlign="middle"> Larger search bar </Table.TD>
                <Table.TD isNumerical verticalAlign="middle" > 6.7% </Table.TD>
                <Table.TD verticalAlign="middle">
                <Button size="small" width="default" > Start </Button>
            </Table.TD>
            </Table.TR>
            <Table.TR>
                <Table.TD verticalAlign="middle"> Center aligned headline </Table.TD>
                <Table.TD isNumerical verticalAlign="middle" > 9.3% </Table.TD>
                <Table.TD verticalAlign="middle">
                <Button size="small" width="default" > Start </Button>
            </Table.TD>
            </Table.TR>
        </Table.TBody>
        </Table>
    </div>)

