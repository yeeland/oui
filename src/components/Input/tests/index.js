import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Input from '../index';

describe('components/Input', () => {
  it('should render a "text" input when type="text" is passed', () => {
    const component = testHelpers.renderIntoDocument(
      <Input type="text" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.tagName).toBe('INPUT');
    expect(componentNode.className).toBe('oui-text-input');
    expect(componentNode.type).toBe('text');
  });

  it('should render a "number" input when type="number" is passed', () => {
    const component = testHelpers.renderIntoDocument(
      <Input type="number" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.type).toBe('number');
  });

  it('should output an error if an invalid "type" is passed', () => {
    spyOn(console, 'error').and.stub();
    testHelpers.renderIntoDocument(
      <Input type="foo" />
    );

    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });

  it('should output an error if a "value" prop is passed without an "onChange" handler', () => {
    spyOn(console, 'error').and.stub();
    testHelpers.renderIntoDocument(
      <Input type="text" value="foo" />
    );

    expect(console.error).toHaveBeenCalled(); // eslint-disable-line
  });

  it('should not allow value to be changed if no "onChange" handler is passed', () => {
    spyOn(console, 'error').and.stub();
    const component = testHelpers.renderIntoDocument(
      <Input type="text" value="foo" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    componentNode.value = 'bar';
    testHelpers.simulate.change(componentNode);

    expect(componentNode.value).toBe('foo');
  });

  it('should call the onChange event handler when the input is changed', () => {
    const handler = {
      onChange: (event) => { },
    };
    spyOn(handler, 'onChange');

    const component = testHelpers.renderIntoDocument(
      <Input type="text" value="foo" onChange={handler.onChange} />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.simulate.change(componentNode);

    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should call the onInput event handler when the input receives user input', () => {
    const handler = {
      onInput: (event) => { },
    };
    spyOn(handler, 'onInput');

    const component = testHelpers.renderIntoDocument(
      <Input type="text" value="foo" onInput={handler.onInput} />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.simulate.input(componentNode);

    expect(handler.onInput).toHaveBeenCalled();
  });
});
