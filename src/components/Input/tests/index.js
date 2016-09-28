import React from 'react';
import Input from 'components/Input';
import { shallow, mount, render } from 'enzyme';

describe('components/Input', () => {
  it('should render a "text" input when type="text" is passed', () => {
    const component = shallow(
      <Input type="text" />
    );

    expect(component.type()).toBe('input');
    expect(component.hasClass('oui-text-input')).toBe(true);
    expect(component.is('[type="text"]')).toBe(true);
  });

  it('should render a "number" input when type="number" is passed', () => {
    const component = shallow(
      <Input type="number" />
    );

    expect(component.is('[type="number"]')).toBe(true);
  });

  it('should output an error if an invalid "type" is passed', () => {
    spyOn(console, 'error').and.stub();

    render(
      <Input type="foo" />
    );

    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });

  it('should output an error if a "value" prop is passed without an "onChange" handler', () => {
    spyOn(console, 'error').and.stub();

    render(
      <Input type="text" value="foo" />
    );

    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });

  it('should call the onChange event handler when the input is changed', () => {
    const handler = {
      onChange: (event) => {},
    };
    spyOn(handler, 'onChange');

    const component = mount(
      <Input type="text" value="foo" onChange={ handler.onChange } />
    );

    component.simulate('change');

    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should call the onFocus event handler when the input gains focus', () => {
    const handler = {
      onFocus: (event) => {},
    };
    spyOn(handler, 'onFocus');

    const component = mount(
      <Input type="text" value="foo" onFocus={ handler.onFocus } />
    );

    component.simulate('focus');

    expect(handler.onFocus).toHaveBeenCalled();
  });

  it('should call the onBlur event handler when the input loses focus', () => {
    const handler = {
      onBlur: (event) => {},
    };
    spyOn(handler, 'onBlur');

    const component = mount(
      <Input type="text" value="foo" onBlur={ handler.onBlur } />
    );

    component.simulate('blur');

    expect(handler.onBlur).toHaveBeenCalled();
  });

  it('should call the onKeyDown event handler when a key is pressed down', () => {
    const handler = {
      onKeyDown: (event) => {},
    };
    spyOn(handler, 'onKeyDown');

    const component = mount(
      <Input type="text" value="foo" onKeyDown={ handler.onKeyDown } />
    );

    component.simulate('keydown');

    expect(handler.onKeyDown).toHaveBeenCalled();
  });

  it('should call the onInput event handler when the input receives user input', () => {
    const handler = {
      onInput: (event) => { },
    };
    spyOn(handler, 'onInput');

    const component = mount(
      <Input type="text" value="foo" onInput={ handler.onInput } />
    );

    component.simulate('input');

    expect(handler.onInput).toHaveBeenCalled();
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Input type="text" testSection="foo" />
    );

    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should render a label if label is passed', () => {
    const component = mount(
      <Input type="text" testSection="foo" label="Input Label" />
    );

    expect(component.find('[data-test-section="foo-label"]').length).toBe(1);
  });

  it('should not render a label by default', () => {
    const component = mount(
      <Input type="text" testSection="foo" />
    );

    expect(component.find('[data-test-section="foo-label"]').length).toBe(0);
  });
});
