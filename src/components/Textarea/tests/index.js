import React from 'react';
import Textarea from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Textarea', () => {
  it('should render a `<textarea>` element', () => {
    const component = shallow(<Textarea />);
    expect(component.type()).toBe('textarea');
  });

  it('should add correct OUI classes', () => {
    const component = shallow(<Textarea />);
    expect(component.hasClass('oui-textarea')).toBe(true);
  });

  it('should call the `onChange` event handler when the textarea is changed', () => {
    const handler = {
      onChange: (event) => {},
    };
    spyOn(handler, 'onChange');

    const component = mount(
      <Textarea onChange={ handler.onChange } />
    );

    component.simulate('change');

    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should call the `onFocus` event handler when the textarea gains focus', () => {
    const handler = {
      onFocus: (event) => {},
    };
    spyOn(handler, 'onFocus');

    const component = mount(
      <Textarea onFocus={ handler.onFocus } />
    );

    component.simulate('focus');

    expect(handler.onFocus).toHaveBeenCalled();
  });

  it('should call the `onBlur` event handler when the textarea loses focus', () => {
    const handler = {
      onBlur: (event) => {},
    };
    spyOn(handler, 'onBlur');

    const component = mount(
      <Textarea onBlur={ handler.onBlur } />
    );

    component.simulate('blur');

    expect(handler.onBlur).toHaveBeenCalled();
  });

  it('should call the `onKeyDown` event handler when a key is pressed down', () => {
    const handler = {
      onKeyDown: (event) => {},
    };
    spyOn(handler, 'onKeyDown');

    const component = mount(
      <Textarea onKeyDown={ handler.onKeyDown } />
    );

    component.simulate('keydown');

    expect(handler.onKeyDown).toHaveBeenCalled();
  });

  it('should call the `onInput` event handler when the textarea receives user input', () => {
    const handler = {
      onInput: (event) => { },
    };
    spyOn(handler, 'onInput');

    const component = mount(
      <Textarea onInput={ handler.onInput } />
    );

    component.simulate('input');

    expect(handler.onInput).toHaveBeenCalled();
  });

  it('should blur the textarea when `blur` function is called', () => {
    const component = mount(<Textarea />);

    const instance = component.instance();
    spyOn(instance._textarea, 'blur');

    instance.blur();

    expect(instance._textarea.blur).toHaveBeenCalled();
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Textarea testSection="foo" />
    );

    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
