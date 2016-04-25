import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

/**
 * Wraps a component in a `div` and calls a function, provided by React, to
 * render it into the document. This is needed for stateless components.
 * https://github.com/facebook/react/issues/4839
 * @param {ReactElement} component - JSX returned in a function
 * @returns {ReactElement} Orignal component wrapped in a `div` and rendered
 * into the document.
 */
export const renderIntoDocument = (component) => {
  return ReactTestUtils.renderIntoDocument(
    <div>
      { component }
    </div>
  );
};

/**
 * Grab the first child of a ReactElement. This is useful after calling the
 * `renderIntoDocument` helper function that wraps a component in a `div`. This
 * is needed because of a limitation of stateless React components.
 * https://github.com/facebook/react/issues/4839
 * @param {ReactElement} component - JSX returned in a function
 * @returns {HTMLElement} Orignal component wrapped in a `div` and rendered
 * into the document.
 */
export const getNodeFromComponent = (component) => {
  return ReactDOM.findDOMNode(component).children[0];
};

/**
 * Find an element that contains an attribute data-test-section equal to the
 * provided value.
 * @param {ReactElement} component - JSX returned in a function
 * @param {string} testSection - unique label identifying an element
 * @returns {HTMLElement} Element that has the provided data test section.
 */
export const getTestSectionFromComponent = (component, testSection) => {
  let componentNode = getNodeFromComponent(component);
  let element = componentNode.querySelector('[data-test-section="' + testSection + '"]');

  return element;
};
