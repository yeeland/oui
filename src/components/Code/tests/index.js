import React from 'react';
import Code from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Code', () => {
  it('should render inline code in code tag', () => {
    const component = shallow(
      <Code type="inline">{ 'var foo;' }</Code>
    );

    expect(component.type()).toBe('code');
  });

  it('should render block code as preformatted text', () => {
    const component = shallow(
      <Code type="block">{ 'var foo;' }</Code>
    );

    expect(component.children().type()).toBe('pre');
  });

  it('should render code that is passed in', () => {
    let code = 'var foo;';

    const componentInline = shallow(
      <Code type="inline">{ code }</Code>
    );

    const componentBlock = shallow(
      <Code type="block">{ code }</Code>
    );

    expect(componentInline.text()).toBe(code);
    expect(componentBlock.text()).toBe(code);
  });

  it('should not render if children are null', () => {
    const component = shallow(
      <Code type="block"></Code>
    );

    expect(component.html()).toBeFalsy();
  });

  it('should not add a copy button by default', () => {
    let code = 'var foo;';

    const component = mount(
      <Code
        type="block"
        testSection="code">
        { code }
      </Code>
    );

    expect(component.find('[data-test-section="code-copy-button"]').length).toBe(0);
  });

  describe('with copy functionality', () => {
    const initialQueryCommandSupported = global.document.queryCommandSupported;

    beforeEach(() => {
      global.document.queryCommandSupported = () => true;
    });

    afterEach(() => {
      global.document.queryCommandSupported = () => initialQueryCommandSupported;
    });

    it('should add a copy button to block code', () => {
      let code = 'var foo;';

      const component = mount(
        <Code
          type="block"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      expect(component.find('[data-test-section="code-copy-button"]').length).toBe(1);
    });

    it('should not add a copy button to inline code', () => {
      let code = 'var foo;';

      const component = mount(
        <Code
          type="inline"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      expect(component.find('[data-test-section="code-copy-button"]').length).toBe(0);
    });
  });


  it('should have a properly set test section', () => {
    const componentInline = shallow(
      <Code testSection="foo-inline" type="inline">Hello!</Code>
    );

    const componentBlock = shallow(
      <Code testSection="foo-block" type="block">Hello!</Code>
    );

    expect(componentInline.is('[data-test-section="foo-inline"]')).toBe(true);
    expect(componentBlock.find('[data-test-section="foo-block"]').length).toBe(1);
  });
});
