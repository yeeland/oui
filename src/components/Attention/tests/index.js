import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Attention from '../index';

describe('components/Attention', () => {

  it('should render text passed in as children', () => {
    const message = 'Hello! This is a short attention bar.';

    const component = testHelpers.renderIntoDocument(
      <Attention>
        { message }
      </Attention>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    expect(componentNode.textContent).toEqual(message);
  });

  it('should render dismiss button when prop is provided', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention
        isDismissible={ true }
        testSection="foo">
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const dismissButtonContainer = testHelpers.getTestSectionFromComponent(component, 'foo-dismiss');
    expect(dismissButtonContainer).not.toBeNull();
  });

  it('should not render dismiss button by default', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention
        testSection="attention">
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const dismissButtonContainer = testHelpers.getTestSectionFromComponent(component, 'attention-dismiss-container');
    expect(dismissButtonContainer).toBeNull();
  });

  it('should have a properly set role attribute', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention>
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    expect(componentNode.getAttribute('role')).toBe('alert');
  });

  it('should have aria-label if type is provided', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention type="brand">
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    expect(componentNode.getAttribute('aria-label')).toBeDefined();
  });

  /**
   * Dismissible Attention components should use button element since it
   * triggers an action instead of navigating elsewhere.
   */
  it('should use an HTML button element for a close button', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention isDismissible={ true }>
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const dismissButtonContainer = testHelpers.getNodeFromComponent(component, 'attention-dismiss-container');
    const dismissButton = dismissButtonContainer.querySelector('button');

    expect(dismissButton).toBeDefined();
  });

  it('should have a properly set test section', () => {
    const component = testHelpers.renderIntoDocument(
      <Attention testSection="foo">
        'Hello! This is a short attention bar.'
      </Attention>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.expectTestSectionToExist(componentNode, 'foo');
  });
});
