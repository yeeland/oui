import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ArrowsInline from '../index';

describe('components/ArrowsInline', () => {
  /**
   * The icons "chevrons" on their own don't contain much value and can be
   * hidden from screen readers. A label should provided to other components
   * (a button, for example) that may use this component.
   */
  it('should have aria-hidden property set to true', () => {
    const component = TestUtils.renderIntoDocument(
      <div>
        <ArrowsInline />
      </div>
    );

    const componentNode = ReactDOM.findDOMNode(component).children[0];
    expect(componentNode.getAttribute('aria-hidden')).toBe('true');
  });
});
