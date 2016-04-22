import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Attention from '../index';

describe('components/Attention', () => {

  it('should render text passed in as children', () => {
    const message = 'Hello! This is a short attention bar.';

    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention>
          { message }
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];

    expect(componentNode.textContent).toEqual(message);
  });

  it('should render dismiss button when prop is provided', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention isDismissable>
          'Hello! This is a short attention bar.'
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    const dismissButtonContainer = componentNode.querySelector('[data-test-section="attention-dismiss-container"]');

    expect(dismissButtonContainer).toBeDefined();
  });

  it('should not render dismiss button by default', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention>
          'Hello! This is a short attention bar.'
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    const dismissButtonContainer = componentNode.querySelector('[data-test-section="attention-dismiss-container"]');

    expect(dismissButtonContainer).toBeNull();
  });

  it('should have a properly set role attribute', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention>
          'Hello! This is a short attention bar.'
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    expect(componentNode.getAttribute('role')).toBe('alert');
  });

  it('should have aria-label if type is provided', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention type="brand">
          'Hello! This is a short attention bar.'
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    expect(componentNode.getAttribute('aria-label')).toBeDefined();
  });

  /**
   * Dismissible Attention components should use button element since it
   * triggers an action instead of navigating elsewhere.
   */
  it('should use an HTML button element for a close button', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <Attention isDismissable>
          'Hello! This is a short attention bar.'
        </Attention>
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    const dismissButton = componentNode.querySelector('[data-test-section="attention-dismiss-container"] > button');

    expect(dismissButton).toBeDefined();
  });
});
