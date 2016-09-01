/* eslint-disable react/jsx-key */
import React from 'react';
import TabNav from '../index';

export default [
  {
    isPadded: true,
    examples: [
      <TabNav activeTab={ 'first' }>
        <TabNav.Tab
          tabId='first'
          onClick={ function() {
            alert('clicked first');  //eslint-disable-line
          } }>
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab
          tabId='second'
          onClick={ function() {
            alert('clicked second');  //eslint-disable-line
          } }>
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab
          tabId='third'
          onClick={ function() {
            alert('clicked third');  //eslint-disable-line
          } }>
          Tab #3
        </TabNav.Tab>
      </TabNav>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <TabNav activeTab={ '2' } style={ ['small'] }>
        <TabNav.Tab tabId="1" onClick={ function() {} }>
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab tabId="2" onClick={ function() {} }>
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab tabId="3" onClick={ function() {} }>
          Tab #3
        </TabNav.Tab>
      </TabNav>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <TabNav activeTab={ '1' } style={ ['small', 'center'] }>
        <TabNav.Tab tabId="1" onClick={ function() {} }>
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab tabId="2" onClick={ function() {} }>
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab tabId="3" onClick={ function() {} }>
          Tab #3
        </TabNav.Tab>
      </TabNav>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <TabNav activeTab={ '1' } style={ ['small', 'sub'] }>
        <TabNav.Tab tabId="1" onClick={ function() {} }>
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab tabId="2" onClick={ function() {} }>
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab tabId="3" onClick={ function() {} }>
          Tab #3
        </TabNav.Tab>
      </TabNav>,
    ],
  },
];
