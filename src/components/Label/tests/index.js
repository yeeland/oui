import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Label from '../index';

describe('components/Label', () => {
  it('should render label with text content and the proper class', () => {
    const component = testHelpers.renderIntoDocument(
      <Label>Foo</Label>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.tagName).toBe('LABEL');
    expect(componentNode.className).toBe('label');
    expect(componentNode.textContent).toBe('Foo');
  });

  it('should render label with DOM nodes and no extra class', () => {
    const component = testHelpers.renderIntoDocument(
      <Label>
        <div>Foo</div>
        <div>Bar</div>
      </Label>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.getAttribute('class')).toBe(null);
    expect(componentNode.innerHTML).toBe('<div>Foo</div><div>Bar</div>');
  });
});
