import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Tabs from '../index';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

describe('components/Tabs', () => {
  it('should have a properly set test sections for menu items and tab panels', () => {
    let component = ReactTestUtils.renderIntoDocument(
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

    let componentNode = ReactDOM.findDOMNode(component);
    testHelpers.expectTestSectionToExist(componentNode, 'test-container');

    // let menu = component.refs.menu;
    testHelpers.expectChildTestSectionsExist(component, 'test-child-first');
    testHelpers.expectChildTestSectionsExist(component, 'test-child-another');

    // let panels = component.refs.panels;
    testHelpers.expectChildTestSectionsExist(component, 'test-child-first');
    testHelpers.expectChildTestSectionsExist(component, 'test-child-another');
  });
  // it('should display as active the tab at index that is passed in as `tabActive`', () => {
  //   let component = testHelpers.renderIntoDocument(
  //     <Tabs tabActive={2}>
  //       <Tabs.Panel title="Tab #1">
  //         <div>Content #1</div>
  //       </Tabs.Panel>
  //       <Tabs.Panel title="Tab #2" testSection="active-tab">
  //         <div>Content #2</div>
  //       </Tabs.Panel>
  //       <Tabs.Panel title="Tab #3">
  //         <div>Content #3</div>
  //       </Tabs.Panel>
  //     </Tabs>
  //   );

  //   let menu = testHelpers.getTestSectionFromComponent(component, 'tabs-menu');
  //   testHelpers.simulate.click(componentNode);

  //   expect(obj.func).toHaveBeenCalled();
  // });
});
