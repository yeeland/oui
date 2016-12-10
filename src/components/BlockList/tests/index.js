import React from 'react';
import BlockList from '../index';
import { shallow } from 'enzyme';

describe('components/BlockList', () => {
  it('should render children', () => {
    const text = 'Hi!';
    const component = shallow(<BlockList>{ text }</BlockList>);
    expect(component.text()).toBe(text);
  });

  it('should properly set test section', () => {
    const component = shallow(<BlockList testSection="foo">Goose</BlockList>);
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
