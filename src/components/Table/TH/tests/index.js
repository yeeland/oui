import React from 'react';
import * as testHelpers from '../../../../utils/test-helpers';
import TH from '../index';

describe('components/Table/TH', () => {
  const TestTableHeadData = (
    <table>
      <thead>
        <tr>
          <TH testSection="example-test-section">
            <button>Goose</button>
          </TH>
        </tr>
      </thead>
    </table>
  );

  const TestTableHeadDataNumerical = (
    <table>
      <thead>
        <tr>
          <TH isNumerical={ true }></TH>
        </tr>
      </thead>
    </table>
  );

  const TestTableHeadDataCollapsed = (
    <table>
      <thead>
        <tr>
          <TH isCollapsed={ true }></TH>
        </tr>
      </thead>
    </table>
  );

  const TestTableHeadDataWithWidth = (
    <table>
      <thead>
        <tr>
          <TH width="50%"></TH>
          <TH></TH>
        </tr>
      </thead>
    </table>
  );

  it('should render as a `th`', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    expect(tableHeadNode.tagName).toBe('TH');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];
    const buttonNode = tableHeadNode.children[0];

    expect(buttonNode.tagName).toBe('BUTTON');
  });

  it('should render with test section', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    testHelpers.expectTestSectionToExist(tableHeadNode, 'example-test-section');
  });

  it('should add numerical class to table cells when provided', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadDataNumerical);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    expect(tableHeadNode.className).toContain('oui-numerical');
  });

  it('should not add numerical class to table cells by default', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    expect(tableHeadNode.className).not.toContain('oui-numerical');
  });

  it('should add collapsed class to table cells when provided', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadDataCollapsed);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    expect(tableHeadNode.className).toContain('oui-cell-collapse');
  });

  it('should not add collapsed class to table cells by default', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadData);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableHeadNode = tableRowNode.children[0];

    expect(tableHeadNode.className).not.toContain('oui-cell-collapse');
  });

  it('should add width inline style to table cells when provided', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadDataWithWidth);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[0];

    expect(tableDataNode.style.width).toBe('50%');
  });

  it('should not add width inline style to table cells by default', () => {
    const component = testHelpers.renderIntoDocument(TestTableHeadDataWithWidth);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];
    const tableRowNode = tableBodyNode.children[0];
    const tableDataNode = tableRowNode.children[1];

    expect(tableDataNode.style.width).toBeFalsy();
  });
});
