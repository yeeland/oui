import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Button from '../../Button';
import ButtonRow from '../';

describe('components/ButtonRow', () => {
  describe('with no buttons supplied', () => {
    it('should not render buttons', () => {
      const component = testHelpers.renderIntoDocument(
        <ButtonRow
          testSection="buttonRowTest"
        />
      );
      const leftButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-left');
      const rightButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-right');
      expect(leftButtons).toBeNull();
      expect(rightButtons).toBeNull();
    });
  });

  describe('with only left buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = testHelpers.renderIntoDocument(
        <ButtonRow
          testSection="buttonRowTest"
          leftGroup={ [
            <Button key="1" style="plain">Button</Button>,
            <Button key="2" style="plain">Button</Button>,
            <Button key="3" style="plain">Button</Button>,
            <Button key="4" style="plain">Button</Button>,
            <Button key="5" style="plain">Button</Button>,
          ] }
        />
      );
      const leftButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-left');
      expect(leftButtons.childNodes[0].type).toEqual('button');
      expect(leftButtons.childNodes.length).toEqual(5);
    });
  });

  describe('with only right buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = testHelpers.renderIntoDocument(
        <ButtonRow
          testSection="buttonRowTest"
          rightGroup={ [
            <Button key="1" style="plain">Button</Button>,
            <Button key="2" style="plain">Button</Button>,
            <Button key="3" style="plain">Button</Button>,
            <Button key="4" style="plain">Button</Button>,
            <Button key="5" style="plain">Button</Button>,
          ] }
        />
      );
      const rightButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-right');
      expect(rightButtons.childNodes[0].type).toEqual('button');
      expect(rightButtons.childNodes.length).toEqual(5);
    });
  });

  describe('with both left and right buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = testHelpers.renderIntoDocument(
        <ButtonRow
          testSection="buttonRowTest"
          leftGroup={ [
            <Button key="1" style="plain">Button</Button>,
          ] }
          rightGroup={ [
            <Button key="1" style="plain">Button</Button>,
          ] }
        />
      );
      const leftButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-left');
      const rightButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-right');
      expect(leftButtons.childNodes[0].type).toEqual('button');
      expect(leftButtons.childNodes.length).toEqual(1);
      expect(rightButtons.childNodes[0].type).toEqual('button');
      expect(rightButtons.childNodes.length).toEqual(1);
    });

    describe('with a test section', () => {
      it('should render with a test section', () => {
        const component = testHelpers.renderIntoDocument(
          <ButtonRow
            testSection="buttonRowTest"
            leftGroup={ [
              <Button key="1" style="plain">Button</Button>,
            ] }
            rightGroup={ [
              <Button key="1" style="plain">Button</Button>,
            ] }
          />
        );
        const buttons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest');
        const leftButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-left');
        const rightButtons = testHelpers.getTestSectionFromComponent(component, 'buttonRowTest-right');
        expect(buttons).not.toBeNull();
        expect(leftButtons).not.toBeNull();
        expect(rightButtons).not.toBeNull();
      });
    });

  });

});
