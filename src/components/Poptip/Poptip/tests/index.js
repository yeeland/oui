import React from 'react';
import Poptip from '../index';
import { shallow, render } from 'enzyme';

describe('components/Poptip/Poptip', () => {
  it('should render text passed in as children', () => {
    const message = 'Hello! This is a short poptip.';
    const component = shallow(
      <Poptip>{ message }</Poptip>
    );
    expect(component.text()).toBe(message);
  });

  it('has `oui-pop--tip` class applied', () => {
    const component = shallow(<Poptip>Heyo!</Poptip>);
    expect(component.hasClass('oui-pop--tip')).toBe(true);
  });

  it('should overwrite SCSS to display by default', () => {
    const component = render(
      <Poptip>Heyo!</Poptip>
    );
    expect(component.children().attr('style')).toContain('display:inline-block');
    expect(component.children().attr('style')).toContain('opacity:1');
    expect(component.children().attr('style')).toContain('position:initial');
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Poptip testSection="foo">Heyo!</Poptip>
    );
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
