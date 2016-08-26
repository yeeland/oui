import React from 'react';
import * as testHelpers from '../../../../utils/test-helpers';
import TBody from '../index';

describe('components/Table/TBody', () => {
  const TestTableBody = (
    <table>
      <TBody testSection="example-test-section">
        <tr></tr>
      </TBody>
    </table>
  );

  it('should render as a `tbody`', () => {
    const component = testHelpers.renderIntoDocument(TestTableBody);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];

    expect(tableBodyNode.tagName).toBe('TBODY');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTableBody);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];

    expect(tableRowNode.tagName).toBe('TR');
  });

  it('should render with test section', () => {
    const component = testHelpers.renderIntoDocument(TestTableBody);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];

    testHelpers.expectTestSectionToExist(tableBodyNode, 'example-test-section');
  });
});
