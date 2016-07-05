import React from 'react';
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

    expect(componentNode.tagName).toBe('PRE');
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
    testHelpers.expectTestSectionToExist(componentBlockNode, 'foo-block');
  });
});
