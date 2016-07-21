import React from 'react';
import { default as Clipboard } from 'clipboard';
import * as testHelpers from '../../../utils/test-helpers';
import Code from '../index';

describe('components/Code', () => {
  it('should render inline code in code tag', () => {
    const component = testHelpers.renderIntoDocument(
      <Code type="inline">{ 'var foo;' }</Code>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.tagName).toBe('CODE');
  });

  it('should render block code as preformatted text', () => {
    const component = testHelpers.renderIntoDocument(
      <Code type="block">{ 'var foo;' }</Code>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.children[0].tagName).toBe('PRE');
  });

  it('should render code that is passed in', () => {
    let code = 'var foo;';

    const componentInline = testHelpers.renderIntoDocument(
      <Code type="inline">{ code }</Code>
    );

    const componentBlock = testHelpers.renderIntoDocument(
      <Code type="block">{ code }</Code>
    );

    const componentInlineNode = testHelpers.getNodeFromComponent(componentInline);
    const componentBlockNode = testHelpers.getNodeFromComponent(componentBlock);

    expect(componentInlineNode.textContent).toBe(code);
    expect(componentBlockNode.textContent).toBe(code);
  });

  it('should add syntax highlighting to code when specified', () => {
    let code = 'var foo;';

    const componentInline = testHelpers.renderIntoDocument(
      <Code type="inline" isHighlighted={ true }>{ code }</Code>
    );

    const componentBlock = testHelpers.renderIntoDocument(
      <Code type="block" isHighlighted={ true }>{ code }</Code>
    );

    const componentInlineNode = testHelpers.getNodeFromComponent(componentInline);
    const componentBlockNode = testHelpers.getNodeFromComponent(componentBlock);

    expect(componentInlineNode.innerHTML).toContain('class="hljs-');
    expect(componentBlockNode.innerHTML).toContain('class="hljs-');
  });

  it('should not add syntax highlighting by default', () => {
    let code = 'var foo;';

    const componentInline = testHelpers.renderIntoDocument(
      <Code type="inline">{ code }</Code>
    );

    const componentBlock = testHelpers.renderIntoDocument(
      <Code type="block">{ code }</Code>
    );

    const componentInlineNode = testHelpers.getNodeFromComponent(componentInline);
    const componentBlockNode = testHelpers.getNodeFromComponent(componentBlock);

    expect(componentInlineNode.innerHTML).not.toContain('class="hljs-');
    expect(componentBlockNode.innerHTML).not.toContain('class="hljs-');
  });

  it('should not add syntax highlighting if language is provided but highlighting is not requested', () => {
    let code = 'var foo;';

    const componentInline = testHelpers.renderIntoDocument(
      <Code type="inline" language="js">{ code }</Code>
    );

    const componentBlock = testHelpers.renderIntoDocument(
      <Code type="block" language="js">{ code }</Code>
    );

    const componentInlineNode = testHelpers.getNodeFromComponent(componentInline);
    const componentBlockNode = testHelpers.getNodeFromComponent(componentBlock);

    expect(componentInlineNode.innerHTML).not.toContain('class="hljs-');
    expect(componentBlockNode.innerHTML).not.toContain('class="hljs-');
  });

  it('should not add a copy button by default', () => {
    let code = 'var foo;';

    const component = testHelpers.renderIntoDocument(
      <Code
        type="block"
        testSection="code">
        { code }
      </Code>
    );

    const copyButton = testHelpers.getTestSectionFromComponent(component, 'code-copy-button');

    expect(copyButton).toBeNull();
  });

  describe('with copy functionality', () => {
    it('should add a copy button to block code', () => {
      let code = 'var foo;';

      const component = testHelpers.renderIntoDocument(
        <Code
          type="block"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      const copyButton = testHelpers.getTestSectionFromComponent(component, 'code-copy-button');

      expect(copyButton).not.toBeNull();
      expect(copyButton.type).toBe('button');
    });

    it('should call clipboard function when button is clicked on', () => {
      let code = 'var foo;';

      const component = testHelpers.renderIntoDocument(
        <Code
          type="block"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      spyOn(Clipboard.prototype, 'onClick').and.stub();
      spyOn(Clipboard.prototype, 'resolveOptions').and.stub();

      const copyButton = testHelpers.getTestSectionFromComponent(component, 'code-copy-button');
      testHelpers.simulate.click(copyButton);

      expect(Clipboard.prototype.resolveOptions.calls.argsFor(0)[0].text()).toEqual(code);
      expect(Clipboard.prototype.onClick.calls.count()).toEqual(1);
    });

    it('should destroy clipboard after button is clicked on', () => {
      let code = 'var foo;';

      const component = testHelpers.renderIntoDocument(
        <Code
          type="block"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      spyOn(Clipboard.prototype, 'destroy').and.stub();

      const copyButton = testHelpers.getTestSectionFromComponent(component, 'code-copy-button');
      testHelpers.simulate.click(copyButton);

      expect(Clipboard.prototype.destroy.calls.count()).toEqual(1);
    });

    it('should not add a copy button to inline code', () => {
      let code = 'var foo;';

      const component = testHelpers.renderIntoDocument(
        <Code
          type="inline"
          hasCopyButton={ true }
          testSection="code">
          { code }
        </Code>
      );

      const copyButton = testHelpers.getTestSectionFromComponent(component, 'code-copy-button');

      expect(copyButton).toBeNull();
    });
  });


  it('should have a properly set test section', () => {
    const componentInline = testHelpers.renderIntoDocument(
      <Code testSection="foo-inline" type="inline">Hello!</Code>
    );

    const componentBlock = testHelpers.renderIntoDocument(
      <Code testSection="foo-block" type="block">Hello!</Code>
    );

    const componentInlineNode = testHelpers.getNodeFromComponent(componentInline);
    const componentBlockNode = testHelpers.getNodeFromComponent(componentBlock);

    testHelpers.expectTestSectionToExist(componentInlineNode, 'foo-inline');
    testHelpers.expectTestSectionToExist(componentBlockNode.children[0], 'foo-block');
  });
});
