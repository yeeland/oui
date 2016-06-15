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
 * Find an element that contains an attribute `data-test-section equal` to the
 * provided value.
 * @param {ReactElement} component - JSX returned in a function
 * @param {String} testSection - unique label identifying an element
 * @returns {HTMLElement} Element that has the provided data test section.
 */
export const getTestSectionFromComponent = (component, testSection) => {
  let componentNode = getNodeFromComponent(component);
  let element = componentNode.querySelector('[data-test-section="' + testSection + '"]');

  return element;
};

/**
 * Assert that an HTMLElement has an attribute `data-test-section` of value
 * `testSection`.
 * @param {HTMLElement} componentNode - Element that should contain test section
 * @param {String} testSection - value of the `data-test-section`
 * @returns {undefined}
 */
export const expectTestSectionToExist = (componentNode, testSection) => {
  let val = componentNode.getAttribute('data-test-section');

  if (val !== testSection) {
    throw new Error(val + ' does not equal ' + testSection);
  }
};

/**
 * Assert that an HTMLElement does not have an attribute `data-test-section`
 * of value `testSection`.
 * @param {HTMLElement} componentNode - Element that should not contain test
 * section
 * @param {String} testSection - value of the `data-test-section`
 * @returns {undefined}
 */
export const expectTestSectionToNotExist = (componentNode, testSection) => {
  let val = componentNode.getAttribute('data-test-section');

  if (val === testSection) {
    throw new Error(val + ' should not equal ' + testSection);
  }
};

/**
 * Assert that an HTMLElement has a child with an attribute `data-test-section` of value
 * `childTestSection`.
 * @param {ReactElement} component - Element that should contain child(ren) with childTestSection
 * @param {String} childTestSection - value of the `data-test-section`
 * @param {Number} numberOfTestSections - expected amount of children with childTestSection, default is 1
 * @returns {undefined}
 */
export const expectChildTestSectionsExist = (component, childTestSection, numberOfTestSections) => {
  numberOfTestSections = numberOfTestSections || 1;

  let childWithTestSectionExists = ReactTestUtils.findAllInRenderedTree(component, (elem) => {
    return elem.getAttribute('data-test-section') === childTestSection;
  });

  if (childWithTestSectionExists.length !== numberOfTestSections) {
    throw new Error(childTestSection + 'occurs only ' + numberOfTestSections + ' times within parent node');
  }
};

/**
 * Simulate events on react components.
 * @returns {Object} Object with methods to simulate events (eg. change, input, etc).
 */
export const simulate = ReactTestUtils.Simulate;
