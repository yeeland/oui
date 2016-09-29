import React from 'react';
import OverylayTrigger from '../index';
import { shallow, mount } from 'enzyme';

const FakeButton = (props) => {
  return <button data-test-section="fake-button"></button>;
};

const FakeOverlay = (props) => {
  return <div data-test-section="fake-overlay"></div>;
};

describe('components/OverlayWrapper', () => {
  it('should render contents passed in as children', () => {
    const component = mount(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
    );
    expect(component.find('[data-test-section="fake-button"]').length).toBe(1);
  });

  it('should render overlay', () => {
    const component = mount(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
    );
    expect(component.find('[data-test-section="fake-overlay"]').length).toBe(1);
  });

  it('should show or hide the `overlay` depending on state', () => {
    const component = mount(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
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

  it('should pass `onClick` function to `children` that changes state of ``', () => {
    spyOn(React, 'cloneElement');

    const component = shallow(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
    );

    const fakeButtonClone = React.cloneElement.calls.mostRecent();

    // Ensure that the default state is what this test expects
    expect(component.state('isOverlayOpen')).toBe(false);
    // Ensure that we are looking at the correct call to `React.cloneElement`
    expect(fakeButtonClone.args[0].type).toBe(FakeButton);

    // Simulate a click on the button
    fakeButtonClone.args[1].onClick();

    // Expect that the state changed
    expect(component.state('isOverlayOpen')).toBe(true);
  });

  it('should still call `children`\'s existing `onClick` if it exists', () => {
    let foo = { bar: () => {} };

    spyOn(React, 'cloneElement');
    spyOn(foo, 'bar');

    shallow(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton onClick={ foo.bar } />
      </OverylayTrigger>
    );

    const fakeButtonClone = React.cloneElement.calls.mostRecent();

    // Ensure that we are looking at the correct call to `React.cloneElement`
    expect(fakeButtonClone.args[0].type).toBe(FakeButton);

    // Simulate a click on the button
    fakeButtonClone.args[1].onClick();

    // Expect that `FakeButton`'s `onClick` was called
    expect(foo.bar.calls.count()).toBe(1);
  });

  describe('passing options to Tether', () => {
    it('should pass the correct options with none of the layout props provided', () => {
      const component = mount(
        <OverylayTrigger
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverylayTrigger>
      );

      const tetherOptions = component.instance()._tether.options;

      expect(tetherOptions.attachment).toBe('top center');
      expect(tetherOptions.constraints.length).toBe(1);
      expect(tetherOptions.constraints[0]).toEqual({
        attachment: 'together',
        to: 'window',
      });
      expect(tetherOptions.offset).toBe('0 0');
      expect(tetherOptions.targetAttachment).toBe('auto auto');
      expect(tetherOptions.targetOffset).toBe('0 0');
      expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(FakeButton).render().children().first()[0].name);
      expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(FakeOverlay).render().children().first()[0].name);
    });

    it('should pass the correct options with all the layout props provided', () => {
      const component = mount(
        <OverylayTrigger
          overlay={ <FakeOverlay /> }
          horizontalAttachment="center"
          verticalAttachment="top"
          verticalTargetAttachment="top"
          horizontalTargetAttachment="center">
          <FakeButton />
        </OverylayTrigger>
      );

      const tetherOptions = component.instance()._tether.options;

      expect(tetherOptions.attachment).toBe('top center');
      expect(tetherOptions.constraints.length).toBe(1);
      expect(tetherOptions.constraints[0]).toEqual({
        attachment: 'together',
        to: 'window',
      });
      expect(tetherOptions.offset).toBe('0 0');
      expect(tetherOptions.targetAttachment).toBe('top center');
      expect(tetherOptions.targetOffset).toBe('0 0');
      expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(FakeButton).render().children().first()[0].name);
      expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(FakeOverlay).render().children().first()[0].name);
    });
  });


  it('should destroy Tether on unmount', () => {
    const component = mount(
      <OverylayTrigger
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
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
      <OverylayTrigger
        testSection="foo"
        overlay={ <FakeOverlay /> }>
        <FakeButton />
      </OverylayTrigger>
    );
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
