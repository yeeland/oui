import React from 'react';
import * as testHelpers from '../../../../utils/test-helpers';
import TD from '../index';

describe('components/Table/TD', () => {
  const TestTableData = (
    <table>
      <tbody>
        <tr>
          <TD testSection="example-test-section">
            <button>Goose</button>
          </TD>
        </tr>
      </tbody>
    </table>
  );

  const TestTableDataNumerical = (
    <table>
      <tbody>
        <tr>
          <TD isNumerical={ true }></TD>
        </tr>
      </tbody>
    </table>
  );

  it('should render as a `td`', () => {
    const component = testHelpers.renderIntoDocument(TestTableData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    expect(tableDataNode.tagName).toBe('TD');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTableData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];
    const buttonNode = tableDataNode.children[0];

    expect(buttonNode.tagName).toBe('BUTTON');
  });

  it('should render with test section', () => {
    const component = testHelpers.renderIntoDocument(TestTableData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    testHelpers.expectTestSectionToExist(tableDataNode, 'example-test-section');
  });

  it('should add numerical class to table cells when provided', () => {
    const component = testHelpers.renderIntoDocument(TestTableDataNumerical);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    expect(tableDataNode.className).toContain('oui-numerical');
  });

  it('should not add numerical class to table cells by default', () => {
    const component = testHelpers.renderIntoDocument(TestTableData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    expect(tableDataNode.className).not.toContain('oui-numerical');
  });
});
