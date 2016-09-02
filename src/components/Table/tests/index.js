import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Table from '../index';

describe('components/Table', () => {
  const TestTable = (
    <Table>
      <tbody></tbody>
    </Table>
  );

  const TableWithTestSection = (
    <Table testSection="example-test-section"></Table>
  );

  const TableWithStyle = (
    <Table style="rule"></Table>
  );

  const TableWithDensity = (
    <Table density="loose"></Table>
  );

  it('should render as a table', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.tagName).toBe('TABLE');
  });

  it('should render children', () => {
    const component = testHelpers.renderIntoDocument(TestTable);
    const tableBodyNode = testHelpers.getNodeFromComponent(component).children[0];

    expect(tableBodyNode.tagName).toBe('TBODY');
  });

  describe('with `density` prop supplied', () => {
    it('should render with prop value as OUI table class modifier', () => {
      const component = testHelpers.renderIntoDocument(TableWithDensity);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).toContain('oui-table--loose');
    });
  });

  describe('with no `density` prop supplied', () => {
    it('should render with default `density` prop value as OUI table class modifier', () => {
      const component = testHelpers.renderIntoDocument(TableWithStyle);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).toContain('oui-table--tight');
    });
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

      expect(componentNode.className).not.toContain('oui-table--wall');
      expect(componentNode.className).not.toContain('oui-table--rule');
      expect(componentNode.className).not.toContain('oui-table--rule-no-bottom-border');
    });
  });

  describe('with a test section', () => {
    it('should render with a test section', () => {
      const component = testHelpers.renderIntoDocument(TableWithTestSection);

      const componentNode = testHelpers.getNodeFromComponent(component);
      testHelpers.expectTestSectionToExist(componentNode, 'example-test-section');
    });
  });
});
