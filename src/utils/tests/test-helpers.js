import React from 'react';
import ReactDOM from 'react-dom';
import * as testHelpers from '../test-helpers';

const ExampleComponent = () => {
  return (
    <foobar data-test-section="example-section-parent">
      <test data-test-section="example-section"></test>
    </foobar>
  );
};

describe('utils/test-helpers', () => {
  describe('#renderIntoDocument', () => {
    it('should wrap the JSX in a `div`', () => {
      let result = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let elementTag = ReactDOM.findDOMNode(result).tagName;

      expect(elementTag).toBe('DIV');
    });
  });

  describe('#getNodeFromComponent', () => {
    it('should grab the component node from a component', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.tagName).toBe('FOOBAR');
    });
  });

  describe('#getTestSectionFromComponent', () => {
    it('should grab the component node from a test section', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getTestSectionFromComponent(component, 'example-section');
      let componentNodeParent = testHelpers.getTestSectionFromComponent(component, 'example-section-parent');

      expect(componentNode.tagName).toBe('TEST');
      expect(componentNodeParent.tagName).toBe('FOOBAR');
    });

    it('should return null if the test section does not exist', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getTestSectionFromComponent(component, 'asdfjkl;');

      expect(componentNode).toBeNull();
    });
  });

  describe('#expectTestSectionToExist', () => {
    it('should throw exception if test section does not exist', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getNodeFromComponent(component);
      expect(() => { testHelpers.expectTestSectionToExist(componentNode.children[0], 'asdfjkl;'); }).toThrow();
    });

    it('should not throw exception if test section exists', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getNodeFromComponent(component);
      expect(() => { testHelpers.expectTestSectionToExist(componentNode.children[0], 'example-section'); }).not.toThrow();
    });
  });

  describe('#expectTestSectionToNotExist', () => {
    it('should throw exception if test section does exist', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getNodeFromComponent(component);
      expect(() => { testHelpers.expectTestSectionToNotExist(componentNode.children[0], 'example-section'); }).toThrow();
    });

    it('should not throw exception if test section does not exist', () => {
      let component = testHelpers.renderIntoDocument(
        <ExampleComponent></ExampleComponent>
      );

      let componentNode = testHelpers.getNodeFromComponent(component);
      expect(() => { testHelpers.expectTestSectionToNotExist(componentNode.children[0], 'asdfjkl;'); }).not.toThrow();
    });
  });
});
