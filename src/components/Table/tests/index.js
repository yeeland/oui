import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Table from '../index';

describe('components/Table', () => {
  const TestTable = (
    <Table
      data={
      [
        ['Row 1, Column 1', 'Row 1, Column 2'],
        ['Row 2, Column 1', 'Row 2, Column 2'],
      ]
      }>
    </Table>
  );

  const TestTableWithHeadings = (
    <Table
      data={
      [
        ['Row 1, Column 1', 'Row 1, Column 2'],
        ['Row 2, Column 1', 'Row 2, Column 2'],
      ]
      }
      headings={
      [
        'Column 1',
        'Column 2',
      ]
      }
      collapsedColumns={ [0] }
      numberedColumns={ [1] }>
    </Table>
  );

  const TableWithTestSection = (
    <Table
      data={
      [
        ['Row 1, Column 1', 'Row 1, Column 2'],
      ]
      }
      testSection="example-test-section">
    </Table>
  );

  const TableWithStyle = (
    <Table
      data={
      [
        ['Row 1, Column 1', 'Row 1, Column 2'],
      ]
      }
      style="rule">
    </Table>
  );

  it('should render as a table', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.tagName).toBe('TABLE');
  });

  it('should render with an OUI className', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.className).toContain('oui-table');
  });

  it('should render with a `<tbody>`', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.children[0].tagName).toBe('TBODY');
  });

  it('should render with two `<tr>` elements within `<tbody>`', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.children[0].children.length).toBe(2);
    expect(componentNode.children[0].children[0].tagName).toBe('TR');
    expect(componentNode.children[0].children[1].tagName).toBe('TR');
  });

  it('should render with two `<td>` elements within a `<tr>`', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    const tableRow = componentNode.children[0].children[0];

    expect(tableRow.children.length).toBe(2);
    expect(tableRow.tagName).toBe('TR');
    expect(tableRow.children[0].tagName).toBe('TD');
    expect(tableRow.children[1].tagName).toBe('TD');
  });

  it('should render the correct text within the table body', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    const tableBody = componentNode.children[0];

    expect(tableBody.children[0].children[0].innerHTML).toBe('Row 1, Column 1');
    expect(tableBody.children[0].children[1].innerHTML).toBe('Row 1, Column 2');
    expect(tableBody.children[1].children[0].innerHTML).toBe('Row 2, Column 1');
    expect(tableBody.children[1].children[1].innerHTML).toBe('Row 2, Column 2');
  });

  describe('with `style` prop supplied', () => {
    it('should render with prop value as OUI table class modifier', () => {
      const component = testHelpers.renderIntoDocument(TableWithStyle);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).toContain('oui-table--rule');
    });
  });

  describe('with no `style` prop supplied', () => {
    it('should render without OUI table class modifiers', () => {
      const component = testHelpers.renderIntoDocument(TestTable);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).not.toContain('oui-table--');
    });
  });

  describe('with a test section', () => {
    it('should render with a test section', () => {
      const component = testHelpers.renderIntoDocument(TableWithTestSection);

      const componentNode = testHelpers.getNodeFromComponent(component);
      testHelpers.expectTestSectionToExist(componentNode, 'example-test-section');
    });
  });

  describe('with no table headings', () => {
    it('should render without a `<thead>`', () => {
      const component = testHelpers.renderIntoDocument(TestTable);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.innerHTML).not.toContain('thead');
    });
  });

  describe('with table headings', () => {
    it('should render with a `<thead>`', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.children[0].tagName).toBe('THEAD');
    });

    it('should render with two `<th>` elements', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);
      const tableHeadRow = componentNode.children[0].children[0].children;

      expect(tableHeadRow.length).toBe(2);
      expect(tableHeadRow[0].tagName).toBe('TH');
      expect(tableHeadRow[1].tagName).toBe('TH');
    });

    it('should render the correct text within the table header', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);
      const tableHeadRow = componentNode.children[0].children[0].children;

      expect(tableHeadRow[0].innerHTML).toBe('Column 1');
      expect(tableHeadRow[1].innerHTML).toBe('Column 2');
    });

    it('should render the `<th>` columns in the correct order as the `<td>`', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);
      const tableHeadRow = componentNode.children[0].children[0].children;
      const tableBodyRow = componentNode.children[1].children[0].children;

      expect(tableHeadRow[0].innerHTML).toBe('Column 1');
      expect(tableHeadRow[1].innerHTML).toBe('Column 2');
      expect(tableBodyRow[0].innerHTML).toBe('Row 1, Column 1');
      expect(tableBodyRow[1].innerHTML).toBe('Row 1, Column 2');
    });

    it('should add cell collapse class to table cells when provided', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);

      const tableHeadRow = componentNode.children[0].children[0].children;
      const tableBodyRow = componentNode.children[1].children[0].children;

      expect(tableHeadRow[0].className).toBe('oui-cell-collapse');
      expect(tableBodyRow[0].className).toBe('oui-cell-collapse');
    });

    it('should add numerical class to table cells when provided', () => {
      const component = testHelpers.renderIntoDocument(TestTableWithHeadings);
      const componentNode = testHelpers.getNodeFromComponent(component);

      const tableHeadRow = componentNode.children[0].children[0].children;
      const tableBodyRow = componentNode.children[1].children[0].children;

      expect(tableHeadRow[1].className).toBe('oui-numerical');
      expect(tableBodyRow[1].className).toBe('oui-numerical');
    });
  });
});
