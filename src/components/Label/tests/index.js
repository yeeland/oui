import React from 'react';
import Label from '../index';
import { shallow, mount, render } from 'enzyme';

describe('components/Label', () => {
  it('should render label with text content', () => {
    const component = shallow(<Label>Foo</Label>);
    expect(component.text()).toBe('Foo');
  });

  it('should render label with correct classes content', () => {
    const component = mount(<Label>Foo</Label>);
    expect(component.find('.oui-label').length).toBe(1);
  });

  it('should render label as a `label` element', () => {
    const component = shallow(<Label>Foo</Label>);
    expect(component.type()).toBe('label');
  });

  it('should render error class when displayError prop is true', () => {
    const component = mount(
      <Label displayError={ true }>Hello Error</Label>
    );

    expect(component.hasClass('oui-form-bad-news')).toBe(true);
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

  it('should render an optional label if isOptional is set', () => {
    const component = shallow(
      <Label isOptional={ true }></Label>
    );
    expect(component.find('.oui-label__optional').length).toBe(1);
  });

  it('should render an asterisk label if isRequired is set', () => {
    const component = shallow(
      <Label isRequired={ true }></Label>
    );
    expect(component.find('.oui-label--required').length).toBe(1);
  });

  it('should render only isRequired if both isOptional and isRequired are set', () => {
    const component = shallow(
      <Label isRequired={ true } isOptional={ true }></Label>
    );
    expect(component.find('.oui-label--required').length).toBe(1);
    expect(component.find('.oui-label__optional').length).toBe(0);
  });

  it('should have a properly set test section', () => {
    const component = shallow(<Label testSection="foo">Foo</Label>);
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
