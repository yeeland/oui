import React from 'react';
import OverylayWrapper from '../index';
import { shallow, mount } from 'enzyme';

jest.mock('tether');
jest.useFakeTimers();

const FakeButton = (props) => {
  return <button data-test-section="fake-button"></button>;
};

const FakeOverlay = (props) => {
  return <div data-test-section="fake-overlay"></div>;
};

describe('components/OverlayWrapper', () => {
  it('should render contents passed in as children', () => {
    const component = mount(
      <OverylayWrapper
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );
    expect(component.find('[data-test-section="fake-button"]').length).toBe(1);
  });

  it('should render overlay', () => {
    const component = mount(
      <OverylayWrapper
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );
    expect(component.find('[data-test-section="fake-overlay"]').length).toBe(1);
  });

  it('should show or hide the `overlay` depending on state', () => {
    const component = mount(
      <OverylayWrapper
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );

    // Start off with the default state
    expect(component.state('isOverlayOpen')).toBe(false);
    expect(component.instance()._overlayEl.getAttribute('style')).toContain('display: none');

    // Change state of `isOverlayOpen` to be true
    component.setState({'isOverlayOpen': true});

    // Expect that state has changed and prop has been updated
    expect(component.state('isOverlayOpen')).toBe(true);
    expect(component.instance()._overlayEl.getAttribute('style')).toContain('display: block');
  });

  describe('clicking on the children', () => {
    let fakeButtonClone;
    let component;
    const foo = { bar: () => {} };

    beforeEach(() => {
      spyOn(React, 'cloneElement').and.callThrough();
      spyOn(foo, 'bar');

      component = mount(
        <OverylayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton onClick={ foo.bar } />
        </OverylayWrapper>
      );

      fakeButtonClone = React.cloneElement.calls.mostRecent();
    });

    afterEach(() => {
      React.cloneElement.calls.reset();
      foo.bar.calls.reset();
      component.unmount();
      fakeButtonClone = null;
      component = null;
    });

    it('should still call `children`\'s existing `onClick` if it exists', () => {
      // Ensure that we are looking at the correct call to `React.cloneElement`
      expect(fakeButtonClone.args[0].type).toBe(FakeButton);

      // Simulate a click on the button
      fakeButtonClone.args[1].onClick();

      // Expect that `FakeButton`'s `onClick` was called
      expect(foo.bar.calls.count()).toBe(1);
    });

    it('should enable and disable Tether when clicking on the children', () => {
      // Ensure that we are looking at the correct call to `React.cloneElement`
      expect(fakeButtonClone.args[0].type).toBe(FakeButton);

      // Store the mock for easy access
      const disableMock = component.instance()._tether.disable.mock;
      const enableMock = component.instance()._tether.enable.mock;
      const initialDisableMockCalls = disableMock.calls.length;
      const initialEnableMockCalls = enableMock.calls.length;

      // Simulate a click on the button
      fakeButtonClone.args[1].onClick();

      // Tether should now be enabled
      expect(enableMock.calls.length).toBe(initialEnableMockCalls + 1);

      // Simulate a click on the button
      fakeButtonClone.args[1].onClick();

      // Tether should now be disabled
      expect(disableMock.calls.length).toBe(initialDisableMockCalls + 1);
    });

    it('should position Tether when clicking on the children', () => {
      // Ensure that we are looking at the correct call to `React.cloneElement`
      expect(fakeButtonClone.args[0].type).toBe(FakeButton);

      // Store the mock for easy access
      const positionMock = component.instance()._tether.position.mock;
      const initialPositionMockCalls = positionMock.calls.length;

      // Simulate a click on the button
      fakeButtonClone.args[1].onClick();

      // Run the `setTimeout` synchronously
      jest.runAllTimers();

      // The `Tether.position` function should have been called once
      expect(positionMock.calls.length).toBe(initialPositionMockCalls + 1);
    });

    it('should pass `onClick` function to `children` that changes state of `OverylayWrapper`', () => {
      // Ensure that we are looking at the correct call to `React.cloneElement`
      expect(fakeButtonClone.args[0].type).toBe(FakeButton);

      // Ensure that the default state is what this test expects
      expect(component.state('isOverlayOpen')).toBe(false);
      // Ensure that we are looking at the correct call to `React.cloneElement`
      expect(fakeButtonClone.args[0].type).toBe(FakeButton);

      // Simulate a click on the button
      fakeButtonClone.args[1].onClick();

      // Expect that the state changed
      expect(component.state('isOverlayOpen')).toBe(true);
    });
  });

  it('should disable Tether by default', () => {
    const component = mount(
      <OverylayWrapper
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );

    const disableMock = component.instance()._tether.disable.mock;
    const enableMock = component.instance()._tether.enable.mock;

    expect(disableMock.calls.length).toBe(1);
    expect(enableMock.calls.length).toBe(0);
  });

  describe('passing options to Tether', () => {
    beforeEach(() => {
      spyOn(OverylayWrapper.prototype, 'createTether').and.callThrough();
    });

    afterEach(() => {
      OverylayWrapper.prototype.createTether.calls.reset();
    });

    it('should pass the correct options with none of the layout props provided', () => {
      const component = mount(
        <OverylayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverylayWrapper>
      );

      const tetherOptions = OverylayWrapper.prototype.createTether.calls.mostRecent().args[0];

      expect(tetherOptions.attachment).toBe('top center');
      expect(tetherOptions.constraints.length).toBe(1);
      expect(tetherOptions.constraints[0]).toEqual({
        attachment: 'together',
        to: 'window',
        pin: false,
      });
      expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(FakeButton).render().children().first()[0].name);
      expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(FakeOverlay).render().children().first()[0].name);
    });

    it('should pass the correct options with all the layout props provided', () => {
      const component = mount(
        <OverylayWrapper
          overlay={ <FakeOverlay /> }
          horizontalAttachment="center"
          verticalAttachment="top"
          verticalTargetAttachment="top"
          horizontalTargetAttachment="center"
          isConstrainedToScreen={ true }>
          <FakeButton />
        </OverylayWrapper>
      );

      const tetherOptions = OverylayWrapper.prototype.createTether.calls.mostRecent().args[0];

      expect(tetherOptions.attachment).toBe('top center');
      expect(tetherOptions.constraints.length).toBe(1);
      expect(tetherOptions.constraints[0]).toEqual({
        attachment: 'together',
        to: 'window',
        pin: true,
      });
      expect(tetherOptions.targetAttachment).toBe('top center');
      expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(FakeButton).render().children().first()[0].name);
      expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(FakeOverlay).render().children().first()[0].name);
    });
  });


  it('should destroy Tether on unmount', () => {
    const component = mount(
      <OverylayWrapper
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );

    const instance = component.instance();
    spyOn(instance._tether, 'destroy');

    expect(instance._tether).toBeTruthy();
    expect(instance._tether.destroy.calls.count()).toBe(0);

    component.unmount();
    expect(instance._tether.destroy.calls.count()).toBe(1);
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <OverylayWrapper
        testSection="foo"
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayWrapper>
    );
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
