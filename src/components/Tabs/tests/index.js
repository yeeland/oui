import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import ReactTestUtils from 'react-addons-test-utils';
import Tabs from '../index';

describe('components/Tabs', () => {
  it('should have a properly set test sections for menu items and tab panels', () => {
    let component = testHelpers.renderIntoDocument(
      <Tabs style={["small", "sub"]} testSection="test-container">
        <Tabs.Panel title="Tab #1" testSection="test-child-first">
          <div>Content #1</div>
        </Tabs.Panel>
        <Tabs.Panel title="Tab #2" testSection="test-child-another">
          <div>Content #2</div>
        </Tabs.Panel>
        <Tabs.Panel title="Tab #3">
          <div>Content #3</div>
        </Tabs.Panel>
      </Tabs>
    );

    let componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.expectTestSectionToExist(componentNode, 'test-container');

    let menu = testHelpers.getTestSectionFromComponent(component, 'tabs-menu')
    testHelpers.expectChildTestSectionsExist(menu, 'test-child-first');
    testHelpers.expectChildTestSectionsExist(menu, 'test-child-another');

    let panels = testHelpers.getTestSectionFromComponent(component, 'tabs-panels');
    testHelpers.expectChildTestSectionsExist(panels, 'test-child-first');
    testHelpers.expectChildTestSectionsExist(panels, 'test-child-another');
  });
  it('should display as active the tab at index that is passed in as `tabActive`', () => {
    let component = testHelpers.renderIntoDocument(
      <Tabs tabActive={2}>
        <Tabs.Panel title="Tab #1">
          <div>Content #1</div>
        </Tabs.Panel>
        <Tabs.Panel title="Tab #2" testSection="active-tab">
          <div>Content #2</div>
        </Tabs.Panel>
        <Tabs.Panel title="Tab #3">
          <div>Content #3</div>
        </Tabs.Panel>
      </Tabs>
    );

    let menu = testHelpers.getTestSectionFromComponent(component, 'tabs-menu')
    let activeMenuTab = testHelpers.findElementsWithClass(menu, 'is-active')
    expect(activeMenuTab.length).toBe(1);
    expect(activeMenuTab[0].textContent).toContain('Tab #3');

    let panels = testHelpers.getTestSectionFromComponent(component, 'tabs-panels')
    let activePanel = testHelpers.findElementsWithClass(panels, 'is-active')
    expect(activePanel.length).toBe(1);
    expect(activePanel[0].textContent).toContain('Content #3');

  });
});
