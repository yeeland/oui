import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Token from '../index';

describe('components/Token', () => {
  it('should have default values for propTypes "isDismissible" and "style" set correctly', () => {
    const component = testHelpers.renderIntoDocument(
      <Token testSection="goose" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    const dismissButtonContainer = testHelpers.getTestSectionFromComponent(component, 'goose-dismiss');
    expect(componentNode.innerHTML).toContain('oui-token--secondary');
    expect(dismissButtonContainer).toBeNull();
  });

  it('should properly display name on token passed down by props', () => {
    const component = testHelpers.renderIntoDocument(
      <Token name="goose" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    expect(componentNode.innerHTML).toContain('goose');
  });

  it('should render dismiss button when prop is provided', () => {
    const component = testHelpers.renderIntoDocument(
      <Token
        isDismissible={ true }
        onDismiss={
          function() {
          }
        }
        testSection="goose">
      </Token>
    );

    const dismissButtonContainer = testHelpers.getTestSectionFromComponent(component, 'goose-dismiss');
    expect(dismissButtonContainer).not.toBeNull();
  });

  it('should have a properly set test section', () => {
    const component = testHelpers.renderIntoDocument(
      <Token testSection="goose" />
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.expectTestSectionToExist(componentNode, 'goose');
  });
});
