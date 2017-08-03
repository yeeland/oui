import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Table from '../components/Table';
import Button from '../components/Button';
import Token from '../components/Token';
import Input from '../components/Input';

const stories = storiesOf('Table With Tokens', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
    .add('mutex part 1', () => <div>
        <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
            <Table.THead>
                <Table.TR>
                    <Table.TH> Experiment </Table.TH>
                    <Table.TH isNumerical> Traffic Allocation </Table.TH>
                    <Table.TH> Status </Table.TH>
                </Table.TR>
            </Table.THead>
            <Table.TBody>
                <Table.TR>
                    <Table.TD> 
                        <Token
                            isDismissible
                            name={ text('exp a', 'Without rearrange change #1 [BUG] WEB-1845') }
                            onDismiss={function (){alert("Hello!")}}
                            style="primary"
                            testSection="goose"
                        /> 
                    </Table.TD>
                    <Table.TD isNumerical > 
                        <Input 
                            defaultValue={20} 
                            type="number"
                        />% 
                    </Table.TD>
                    <Table.TD> Not Started </Table.TD>
                </Table.TR>
                <Table.TR>
                    <Table.TD>  
                        <Token
                            isDismissible
                            name={ text('exp b', 'P13N Sidebar resize') }
                            onDismiss={function (){alert("Hello!")}}
                            style="primary"
                            testSection="goose"
                        />
                    </Table.TD>
                    <Table.TD isNumerical> 
                        <Input 
                            defaultValue={15} 
                            type="number"
                        />% 
                    </Table.TD>
                    <Table.TD> Not Started </Table.TD>
                </Table.TR>
            </Table.TBody>
        </Table>
    </div>)
    .add('Mutex original', () => <Table
            density="tight"
            style="rule"
            tableLayoutAlgorithm="auto"
        >
            <Table.THead>
                <Table.TR>
                    <Table.TH>
                        Experiment
                    </Table.TH>
                    <Table.TH isNumerical>
                        Traffic Allocation
                    </Table.TH>
                    <Table.TH>
                        Status
                    </Table.TH>
                </Table.TR>
            </Table.THead>
        <Table.TBody>
            <Table.TR>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <Token
                    isDismissible
                    name={ text('exp a', 'Without rearrange change #1 [BUG] WEB-1845') }
                    onDismiss={() => {console.log("[DEREK] onDismiss");}}
                    style="primary"
                />
                </div>
            </Table.TD>
            <Table.TD isNumerical verticalAlign="middle">
                <div className="soft--ends">
                <input
                    className="width--75 lego-text-input line--1 text--right"
                    min="0"
                    max="100"
                    defaultValue={20}
                    type="number"
                    onChange={() => {console.log("[DEREK] onChange");}}
                    data-test-section="trafficAllocation-test"
                />
                <span className="push-half--left push--right">%</span>
                </div>
            </Table.TD>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <span className="ll">
                    Not Started
                </span>
                </div>
            </Table.TD>
            </Table.TR>
            <Table.TR>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <Token
                    isDismissible
                    name={ text('exp b', 'P13N Sidebar resize') }
                    onDismiss={() => {console.log("[DEREK] onDismiss");}}
                    style="primary"
                />
                </div>
            </Table.TD>
            <Table.TD isNumerical verticalAlign="middle">
                <div className="soft--ends">
                <input
                    className="width--75 lego-text-input line--1 text--right"
                    min="0"
                    max="100"
                    defaultValue={15}
                    type="number"
                    onChange={() => {console.log("[DEREK] onChange");}}
                    data-test-section="trafficAllocation-test"
                />
                <span className="push-half--left push--right">%</span>
                </div>
            </Table.TD>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <span className="ll">
                    Not Started
                </span>
                </div>
            </Table.TD>
            </Table.TR>
        </Table.TBody>
        </Table>)