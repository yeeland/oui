import React from 'react';
import * as testHelpers from '../../../../utils/test-helpers';
import TR from '../index';

describe('components/Table/TR', () => {
  const TestTableRow = (
    <table>
      <tbody>
        <TR testSection="example-test-section">
          <td></td>
        </TR>
      </tbody>
    </table>
  );

  it('should render as a `tr`', () => {
    const component = testHelpers.renderIntoDocument(TestTableRow);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];

    expect(tableRowNode.tagName).toBe('TR');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTableRow);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    expect(tableDataNode.tagName).toBe('TD');
  });

  it('should render with test section', () => {
    const component = testHelpers.renderIntoDocument(TestTableRow);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];

    testHelpers.expectTestSectionToExist(tableRowNode, 'example-test-section');
  });
});
