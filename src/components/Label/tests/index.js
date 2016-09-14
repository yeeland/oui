import React from 'react';
import Label from '../index';
import { shallow, render } from 'enzyme';

describe('components/Label', () => {
  it('should render label with text content', () => {
    const component = shallow(<Label>Foo</Label>);
    expect(component.text()).toBe('Foo');
  });

  it('should render label with correct classes content', () => {
    const component = shallow(<Label>Foo</Label>);
    expect(component.hasClass('oui-label')).toBe(true);
  });

  it('should render label as a `label` element', () => {
    const component = shallow(<Label>Foo</Label>);
    expect(component.type()).toBe('label');
  });

  describe('with DOM nodes as children', () => {
    it('should render label with DOM nodes', () => {
      const component = shallow(
        <Label>
          <div>Foo</div>
        </Label>
      );

      expect(component.containsMatchingElement(<div>Foo</div>)).toBe(true);
    });

    it('should render label without extra classes', () => {
      const component = render(
        <Label>
          <div>Foo</div>
        </Label>
      );

      expect(component.children().attr('class')).toBeFalsy();
    });
  });

  it('should have a properly set test section', () => {
    const component = shallow(<Label testSection="foo">Foo</Label>);
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
