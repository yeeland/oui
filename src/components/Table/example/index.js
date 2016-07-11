/* eslint-disable react/jsx-key */
import React from 'react';
import Table from '../index';

export default [
  {
    isPadded: true,
    examples: [
      <Table
        data={
          [
            ['Header CTA', '12%', 'Running'],
            ['Shorter Contact Form', '4%', 'Draft'],
            ['Larger search bar', '6.7%', 'Paused'],
            ['Center aligned headline', '9.3%', 'Running'],
          ]
        }
        headings={
          [
            'Experiment',
            'Conversion Rate',
            'Status',
          ]
        }>
      </Table>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <Table
        data={
          [
            ['Header CTA', '12%', 'Running'],
            ['Shorter Contact Form', '4%', 'Draft'],
            ['Larger search bar', '6.7%', 'Paused'],
            ['Center aligned headline', '9.3%', 'Running'],
          ]
        }
        headings={
          [
            'Experiment',
            'Conversion Rate',
            'Status',
          ]
        }
        numberedColumns={ [1] }
        style="rule">
      </Table>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <Table
        data={
          [
            ['Header CTA', '12%', 'Running'],
            ['Shorter Contact Form', '4%', 'Draft'],
            ['Larger search bar', '6.7%', 'Paused'],
            ['Center aligned headline', '9.3%', 'Running'],
          ]
        }
        headings={
          [
            'Experiment',
            'Conversion Rate',
            'Status',
          ]
        }
        numberedColumns={ [1] }
        collapsedColumns={ [2] }
        style="wall">
      </Table>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <Table
        data={
          [
            ['Header CTA', '12%', 'Running'],
            ['Shorter Contact Form', '4%', 'Draft'],
            ['Larger search bar', '6.7%', 'Paused'],
            ['Center aligned headline', '9.3%', 'Running'],
          ]
        }
        style="wall">
      </Table>,
    ],
  },
];
