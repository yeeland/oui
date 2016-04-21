import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Attention from '../index';

describe('Attention', () => {

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
    const dismissButton = componentNode.querySelector('[data-test-section="attention-dismiss"]');

    expect(dismissButton).not.toBeNull();
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
    const dismissButton = componentNode.querySelector('[data-test-section="attention-dismiss"]');

    expect(dismissButton).toBeNull();
  });

});
