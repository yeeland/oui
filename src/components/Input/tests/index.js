import React from 'react';
import Input from '../index';
import { shallow, mount, render } from 'enzyme';

describe('components/Input', () => {
  it('should render a "text" input when type="text" is passed', () => {
    const component = shallow(
      <Input type="text" />
    );

    expect(component.find('input').is('[type="text"]')).toBe(true);
  });

  it('should render error class when displayError prop is true', () => {
    const component = shallow(
      <Input type="text" displayError={ true } />
    );

    expect(component.hasClass('oui-form-bad-news')).toBe(true);
  });

  it('should render a "number" input when type="number" is passed', () => {
    const component = shallow(
      <Input type="number" />
    );

    const input = component.find('input');
    expect(input.is('[type="number"]')).toBe(true);
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

    const input = component.find('input');
    input.simulate('change');

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

    const input = component.find('input');
    input.simulate('focus');

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

    const input = component.find('input');
    input.simulate('blur');

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

    const input = component.find('input');
    input.simulate('keydown');

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

    const input = component.find('input');
    input.simulate('input');

    expect(handler.onInput).toHaveBeenCalled();
  });

  it('should blur the input when blur function is called', () => {
    const component = mount(
      <Input type="text" value="foo" />
    );

    const instance = component.instance();
    spyOn(instance._input, 'blur');

    instance.blur();

    expect(instance._input.blur).toHaveBeenCalled();
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Input type="text" testSection="foo" />
    );

    const input = component.find('input');
    expect(input.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should add a `max` attribute when `max` is provided', () => {
    const component = shallow(
      <Input type="number" max={ 10 } />
    );

    const input = component.find('input');
    expect(input.is('[max=10]')).toBe(true);
  });

  it('should add a `min` attribute when `min` is provided', () => {
    const component = shallow(
      <Input type="number" min={ 10 } />
    );

    const input = component.find('input');
    expect(input.is('[min=10]')).toBe(true);
  });

  it('should have a test section declared', () => {
    const component = shallow(
      <Input type="text" testSection="foo" />
    );

    const input = component.find('input');
    expect(input.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should render a label if label is passed', () => {
    const component = mount(
      <Input type="text" testSection="foo-label" label="Input Label" />
    );

    const input = component.find('input');
    expect(input.find('[data-test-section="foo-label"]').length).toBe(1);
  });

  it('should render a label with optional text if label and isOptional is passed', () => {
    const component = mount(
      <Input type="text" testSection="foo" label="Input Label" isOptional={ true } />
    );

    expect(component.text()).toBe('Input Label(Optional)');
  });

  it('should throw an error if isOptional is passed without a label', () => {
    spyOn(console, 'error').and.stub();

    shallow(
      <Input type="text" testSection="foo" isOptional={ true } />
    );

    expect(console.error.calls.all()[0].args[0]).toContain('Must include a value for the label prop to use the isOptional prop'); // eslint-disable-line
  });


  it('should not render a label by default', () => {
    const component = mount(
      <Input type="text" testSection="foo" />
    );

    expect(component.find('[data-test-section="foo-label"]').length).toBe(0);
  });
});
