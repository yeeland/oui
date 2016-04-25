import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import ArrowsInline from '../index';

describe('components/ArrowsInline', () => {
  /**
   * The icons "chevrons" on their own don't contain much value and can be
   * hidden from screen readers. A label should provided to other components
   * (a button, for example) that may use this component.
   */
  it('should have aria-hidden property set to true', () => {
    const component = testHelpers.renderIntoDocument(
      <ArrowsInline />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    expect(componentNode.getAttribute('aria-hidden')).toBe('true');
  });
});
