import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Table from '../components/Table';
import Button from '../components/Button';
import Token from '../components/Token';

const stories = storiesOf('Table With Tokens', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
    .addWithInfo('mutex part 1', () => <div>
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
                    <Table.TD> 
                        <Token
                            name="Duck"
                            style="primary"
                        /> 
                    </Table.TD>
                    <Table.TD isNumerical> 12% </Table.TD>
                    <Table.TD> Paused </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD>  
                        <Token
                            name="Duck"
                            style="primary"
                        />
                    </Table.TD>
                    <Table.TD isNumerical> 4% </Table.TD>
                    <Table.TD> Draft </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD>
                        <Token
                            name="Duck"
                            style="primary"
                        />
                    </Table.TD>
                    <Table.TD isNumerical> 6.7% </Table.TD>
                    <Table.TD> Paused </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD>
                    <Token
                        name="Duck"
                        style="primary"
                    />
                    </Table.TD>
                    <Table.TD isNumerical> 9.3% </Table.TD>
                    <Table.TD> Running </Table.TD>
                </Table.TR>
            </Table.TBody>
        </Table>
    </div>)