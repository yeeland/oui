import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import TabNav from '../index';

describe('components/TabNav', () => {
  const TestTabNav = (
    <TabNav activeTab={ 'first' }>
      <TabNav.Tab
        tabId='first'
        onClick={ function() {} }>
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab
        tabId='second'
        onClick={ function() {} }>
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab
        tabId='third'
        onClick={ function() {} }>
        Tab #3
      </TabNav.Tab>
    </TabNav>
  );

  const TestTabNavWithStyle = (
    <TabNav activeTab={ 'first' } style={ ['small', 'center'] }>
      <TabNav.Tab
        tabId='first'
        onClick={ function() {} }>
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab
        tabId='second'
        onClick={ function() {} }>
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab
        tabId='third'
        onClick={ function() {} }>
        Tab #3
      </TabNav.Tab>
    </TabNav>
  );

  const TestTabNavTestSection = (
    <TabNav activeTab={ 'first' } testSection='tab-wrapper'>
      <TabNav.Tab
        tabId='first'
        testSection='first-tab-item'
        onClick={ function() {} }>
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab
        tabId='second'
        testSection='second-tab-item'
        onClick={ function() {} }>
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab
        tabId='third'
        onClick={ function() {} }>
        Tab #3
      </TabNav.Tab>
    </TabNav>
  );

  const TestTabNavDisabled = (
    <TabNav activeTab={ 'first' }>
      <TabNav.Tab
        tabId='first'
        onClick={ function() {} }>
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab
        tabId='second'
        isDisabled={ true }
        onClick={ function() {} }>
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab
        tabId='third'
        onClick={ function() {} }>
        Tab #3
      </TabNav.Tab>
    </TabNav>
  );

  it('should render with an OUI className', () => {
    const component = testHelpers.renderIntoDocument(TestTabNav);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.className).toContain('oui-tabs');
    expect(componentNode.children[0].className).toContain('oui-tabs-nav');
  });

  it('should render with child components with OUI classNames', () => {
    const component = testHelpers.renderIntoDocument(TestTabNav);
    const componentNode = testHelpers.getNodeFromComponent(component);
    let children = componentNode.children[0].children;
    for (var key in children) {
      if (children.hasOwnProperty(key)) {
        expect(children[key].className).toContain('oui-tabs-nav__item');
      }
    }
  });

  it('should add the active class to the tab with the same active id assigned to activeTab', () => {
    const component = testHelpers.renderIntoDocument(TestTabNav);
    const componentNode = testHelpers.getNodeFromComponent(component);

    expect(componentNode.children[0].children[0].className).toContain('is-active');
  });

  it('should call function that is passed to onClick after tab is clicked', () => {
    const obj = {
      func1: function() {},
      func2: function() {},
      func3: function() {},
    };
    spyOn(obj, 'func1').and.stub();
    spyOn(obj, 'func2').and.stub();
    spyOn(obj, 'func3').and.stub();

    const TestTabNavWithSpies = (
      <TabNav activeTab={ 'first' }>
        <TabNav.Tab
          tabId='first'
          onClick={ obj.func1 }>
          Tab #1
        </TabNav.Tab>
        <TabNav.Tab
          tabId='second'
          onClick={ obj.func2 }>
          Tab #2
        </TabNav.Tab>
        <TabNav.Tab
          tabId='third'
          onClick={ obj.func3 }>
          Tab #3
        </TabNav.Tab>
      </TabNav>
    );
    const component = testHelpers.renderIntoDocument(TestTabNavWithSpies);
    const componentNode = testHelpers.getNodeFromComponent(component);

    testHelpers.simulate.click(componentNode.children[0].children[0]);
    expect(obj.func1).toHaveBeenCalled();
    testHelpers.simulate.click(componentNode.children[0].children[1]);
    expect(obj.func2).toHaveBeenCalled();
    testHelpers.simulate.click(componentNode.children[0].children[2]);
    expect(obj.func3).toHaveBeenCalled();
  });

  describe('with a child with `isDisabled` prop supplied', () => {
    it('should render only that child with a disabled class', () => {
      const component = testHelpers.renderIntoDocument(TestTabNavDisabled);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.children[0].children[0].className).not.toContain('tab-disabled');
      expect(componentNode.children[0].children[1].className).toContain('tab-disabled');
      expect(componentNode.children[0].children[2].className).not.toContain('tab-disabled');
    });
  });

  describe('with `style` prop supplied', () => {
    it('should render with prop value as OUI tab class modifier', () => {
      const component = testHelpers.renderIntoDocument(TestTabNavWithStyle);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).toContain('oui-tabs--small');
      expect(componentNode.className).toContain('oui-tabs--center');
    });
  });

  describe('with no `style` prop supplied', () => {
    it('should render without OUI tab class modifiers', () => {
      const component = testHelpers.renderIntoDocument(TestTabNav);
      const componentNode = testHelpers.getNodeFromComponent(component);

      expect(componentNode.className).not.toContain('oui-tabs--');
    });
  });

  describe('with a test section', () => {
    it('should render parent and children with separate test sections', () => {
      const component = testHelpers.renderIntoDocument(TestTabNavTestSection);

      const componentNode = testHelpers.getNodeFromComponent(component);
      testHelpers.expectTestSectionToExist(componentNode, 'tab-wrapper');
      testHelpers.expectTestSectionToExist(componentNode.children[0].children[0], 'first-tab-item');
      testHelpers.expectTestSectionToExist(componentNode.children[0].children[1], 'second-tab-item');
    });
  });
});
