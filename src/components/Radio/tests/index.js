import React from 'react';
import Radio from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Radio', () => {
  it('should render an input of type radio', () => {
    const component = mount(<Radio name="goose" />);
    expect(component.find('input[type="radio"]').length).toBe(1);
  });

  it('should render input with name when provided', () => {
    const component = mount(<Radio name="goose" />);
    expect(component.find('input[type="radio"]').get(0).name).toBe('goose');
  });

  it('should render a checked radio input when `defaultChecked` is true', () => {
    const component = mount(<Radio name="goose" defaultChecked={ true } />);
    expect(component.find('input[type="radio"]').get(0).checked).toBe(true);
  });

  it('should render an unchecked radio input when `defaultChecked` is false', () => {
    const component = mount(<Radio name="goose" defaultChecked={ false } />);
    expect(component.find('input[type="radio"]').get(0).checked).toBe(false);
  });

  it('should render a checked radio input when `checked` is true', () => {
    const component = mount(<Radio name="goose" checked={ true } onChange={ function() {} } />);
    expect(component.find('input[type="radio"]').get(0).checked).toBe(true);
  });

  it('should render an unchecked radio input when `checked` is false', () => {
    const component = mount(<Radio name="goose" checked={ false } onChange={ function() {} } />);
    expect(component.find('input[type="radio"]').get(0).checked).toBe(false);
  });

  it('should throw an error if a radio input is rendered without an `onChange` function', () => {
    spyOn(console, 'error').and.stub();

    mount(<Radio name="goose" checked={ true } />);

    expect(console.error.calls.all()[0].args[0]).toContain('You provided a `checked` prop to a form field without an `onChange` handler'); // eslint-disable-line
  });

  it('should call the `onChange` event handler when the radio input is changed', () => {
    const handler = {
      onChange: (event) => {},
    };
    spyOn(handler, 'onChange');

    const component = shallow(<Radio name="goose" onChange={ handler.onChange } />);

    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should be wrapped in a label', () => {
    const component = mount(<Radio name="goose" />);

    const label = component.find('label');
    const radio = label.find('input[type="radio"]');

    expect(label.length).toBe(1);
    expect(radio.length).toBe(1);
  });

  it('label should render text', () => {
    const component = mount(<Radio name="goose" label="foo" />);

    const label = component.find('label');
    expect(label.text()).toBe('foo');
  });

  it('should add disabled class to label text when disabled', () => {
    const component = mount(<Radio name="goose" isDisabled={ true } />);

    const label = component.find('.oui-label--disabled');
    expect(label.length).toBe(1);
  });

  it('should not add disabled class to label text when not disabled', () => {
    const component = mount(<Radio name="goose" isDisabled={ false } />);

    const label = component.find('.oui-label--disabled');
    expect(label.length).toBe(0);
  });

  it('should add disabled attribute to radio input when disabled', () => {
    const component = mount(<Radio name="goose" isDisabled={ true } />);

    const input = component.find('input[disabled]');
    expect(input.length).toBe(1);
  });

  it('should not add disabled attribute to radio input when not disabled', () => {
    const component = mount(<Radio name="goose" isDisabled={ false } />);
    expect(component.find('input').prop('disabled')).toBe(false);
  });

  it('should properly add a test section to label', () => {
    const component = mount(<Radio name="goose" testSection="duck" />);
    expect(component.find('[data-test-section="duck-label"]').length).toBe(1);
  });

  it('should properly add a test section to radio input', () => {
    const component = mount(<Radio name="goose" testSection="duck" />);
    expect(component.find('input[type="radio"][data-test-section="duck"]').length).toBe(1);
  });
});
