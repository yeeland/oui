import React from 'react';
import Checkbox from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Checkbox', () => {
  it('should render an input of type checkbox', () => {
    const component = mount(<Checkbox />);
    expect(component.find('input[type="checkbox"]').length).toBe(1);
  });

  it('should render a checked checkbox when `defaultChecked` is true', () => {
    const component = mount(<Checkbox defaultChecked={ true } />);
    expect(component.find('input[type="checkbox"]').get(0).checked).toBe(true);
  });

  it('should render an unchecked checkbox when `defaultChecked` is false', () => {
    const component = mount(<Checkbox defaultChecked={ false } />);
    expect(component.find('input[type="checkbox"]').get(0).checked).toBe(false);
  });

  it('should call the onChange event handler when the checkbox is changed', () => {
    const handler = {
      onChange: (event) => {},
    };
    spyOn(handler, 'onChange');

    const component = shallow(<Checkbox onChange={ handler.onChange } />);

    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should be wrapped in a label', () => {
    const component = mount(<Checkbox />);

    const label = component.find('label');
    const checkbox = label.find('input[type="checkbox"]');

    expect(label.length).toBe(1);
    expect(checkbox.length).toBe(1);
  });

  it('label should render text', () => {
    const component = mount(<Checkbox label="foo" />);

    const label = component.find('label');
    expect(label.text()).toBe('foo');
  });

  it('should add disabled class to label text when disabled', () => {
    const component = mount(<Checkbox isDisabled={ true } />);

    const label = component.find('.oui-label--disabled');
    expect(label.length).toBe(1);
  });

  it('should not add disabled class to label text when not disabled', () => {
    const component = mount(<Checkbox isDisabled={ false } />);

    const label = component.find('.oui-label--disabled');
    expect(label.length).toBe(0);
  });

  it('should add disabled attribute to checkbox when disabled', () => {
    const component = mount(<Checkbox isDisabled={ true } />);

    const input = component.find('input[disabled]');
    expect(input.length).toBe(1);
  });

  it('should not add disabled attribute to checkbox when not disabled', () => {
    const component = mount(<Checkbox isDisabled={ false } />);

    const input = component.find('input:not([disabled])');
    expect(input.length).toBe(0);
  });

  it('should properly add a test section to label', () => {
    const component = mount(<Checkbox testSection="duck" />);
    expect(component.find('[data-test-section="duck-label"]').length).toBe(1);
  });

  it('should properly add a test section to checkbox', () => {
    const component = mount(<Checkbox testSection="duck" />);
    expect(component.find('input[type="checkbox"][data-test-section="duck"]').length).toBe(1);
  });
});
