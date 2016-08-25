import React from 'react';
import * as testHelpers from '../../../../utils/test-helpers';
import THead from '../index';

describe('components/Table/THead', () => {
  const TestTableHead = (
    <table>
      <THead testSection="example-test-section">
        <tr></tr>
      </THead>
    </table>
  );

  it('should render as a `thead`', () => {
    const component = testHelpers.renderIntoDocument(TestTableHead);
    const tableHeadNode = testHelpers.getNodeFromComponent(component).children[0];

    expect(tableHeadNode.tagName).toBe('THEAD');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTableHead);
    const tableHeadNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableHeadNode.children[0];

    expect(tableRowNode.tagName).toBe('TR');
  });

  it('should render with test section', () => {
    const component = testHelpers.renderIntoDocument(TestTableHead);
    const tableHeadNode = testHelpers.getNodeFromComponent(component).children[0];

    testHelpers.expectTestSectionToExist(tableHeadNode, 'example-test-section');
  });
});
