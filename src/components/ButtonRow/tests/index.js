import React from 'react';
import Button from '../../Button';
import ButtonRow from '../';
import { mount } from 'enzyme';

describe('components/ButtonRow', () => {
  describe('with no buttons supplied', () => {
    it('should not render buttons', () => {
      const component = mount(
        <ButtonRow
          testSection="buttonRowTest"
        />
      );

      expect(component.find('[data-test-section="buttonRowTest-left"]').length).toBe(0);
      expect(component.find('[data-test-section="buttonRowTest-right"]').length).toBe(0);
    });
  });

  describe('with only left buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = mount(
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

      expect(component.find('[data-test-section="buttonRowTest-left"] button').length).toBe(5);
    });
  });

  describe('with only right buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = mount(
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
      expect(component.find('[data-test-section="buttonRowTest-right"] button').length).toBe(5);
    });
  });

  describe('with both left and right buttons supplied', () => {
    it('should render correct number of buttons if buttons are supplied', () => {
      const component = mount(
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

      expect(component.find('[data-test-section="buttonRowTest-left"] button').length).toBe(1);
      expect(component.find('[data-test-section="buttonRowTest-right"] button').length).toBe(1);
    });

    describe('with a test section', () => {
      it('should render with a test section', () => {
        const component = mount(
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

        expect(component.find('[data-test-section="buttonRowTest"]').length).toBe(1);
        expect(component.find('[data-test-section="buttonRowTest-left"]').length).toBe(1);
        expect(component.find('[data-test-section="buttonRowTest-right"]').length).toBe(1);
      });
    });
  });
});
