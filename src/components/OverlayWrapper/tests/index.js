import React from 'react';
import OverlayWrapper from '../index';
import { shallow, mount } from 'enzyme';

jest.mock('tether');
jest.useFakeTimers();

const FakeButton = (props) => {
  return <button data-test-section="fake-button"></button>;
};

const FakeOverlay = (props, context) => {
  return (
    <div data-test-section="fake-overlay">
      <button
        onClick={ context.hideOverlay }
        data-test-section="fake-overlay-close">
        Close
      </button>
    </div>
  );
};

FakeOverlay.contextTypes = {
  hideOverlay: React.PropTypes.func.isRequired,
};

describe('components/OverlayWrapper', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  describe('#componentDidMount', () => {
    beforeEach(() => {
      spyOn(OverlayWrapper.prototype, 'createTether').and.callThrough();
    });

    afterEach(() => {
      OverlayWrapper.prototype.createTether.calls.reset();
    });

    it('should call function to disable Tether', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      instance.componentDidMount();

      expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
    });

    it('should pass the correct options when none of the layout props are provided', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const tetherOptions = OverlayWrapper.prototype.createTether.calls.mostRecent().args[0];

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

    it('should pass the correct options when all the layout props are provided', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          horizontalAttachment="center"
          verticalAttachment="top"
          verticalTargetAttachment="top"
          horizontalTargetAttachment="center"
          isConstrainedToScreen={ true }>
          <FakeButton />
        </OverlayWrapper>
      );

      const tetherOptions = OverlayWrapper.prototype.createTether.calls.mostRecent().args[0];

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

  describe('#componentWillUnmount', () => {
    let component;
    let instance;

    beforeEach(() => {
      component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      instance = component.instance();
    });

    afterEach(() => {
      component = null;
      instance = null;
    });

    it('should destroy Tether', () => {
      spyOn(instance._tether, 'destroy');

      const initialCallCount = instance._tether.destroy.calls.count();

      component.unmount();
      expect(instance._tether.destroy.calls.count()).toBe(initialCallCount + 1);
    });

    it('should call `removeBodyEventListner` function', () => {
      spyOn(instance, 'removeBodyEventListner');

      const initialCallCount = instance.removeBodyEventListner.calls.count();

      component.unmount();
      expect(instance.removeBodyEventListner.calls.count()).toBe(initialCallCount + 1);
    });

    it('should remove the Tether element', () => {
      instance._tether.element = {
        remove: () => {},
      };
      spyOn(instance._tether.element, 'remove');
      const initialCallCount = instance._tether.element.remove.calls.count();

      component.unmount();
      expect(instance._tether.element.remove.calls.count()).toBe(initialCallCount + 1);
    });
  });

  describe('#disableTether', () => {
    it('should call function to remove event listner from document body', () => {
      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'removeBodyEventListner');

      const initialCallCount = instance.removeBodyEventListner.calls.count();

      instance._tether = { disable: () => {} };
      instance.disableTether();

      expect(instance.removeBodyEventListner.calls.count()).toBe(initialCallCount + 1);
    });

    it('should call function to disable Tether', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      const disableMock = instance._tether.disable.mock;
      const initialCallCount = disableMock.calls.length;

      instance.disableTether();

      expect(disableMock.calls.length).toBe(initialCallCount + 1);
    });

    it('should call `onHide` prop if a function is provided', () => {
      const obj = { func: () => {} };
      spyOn(obj, 'func').and.stub();

      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          onHide={ obj.func }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      const initialCallCount = obj.func.calls.count();

      instance.disableTether();

      expect(obj.func.calls.count()).toBe(initialCallCount + 1);
    });

    it('should exit early if `onHide` function returns false', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          onHide={ function() { return false; } }>
          <FakeButton />
        </OverlayWrapper>
      );

      component.setState({ isOverlayOpen: true });

      const instance = component.instance();
      spyOn(instance, 'removeBodyEventListner');

      const disableMock = instance._tether.disable.mock;
      const initialDisableMockCallCount = disableMock.calls.length;
      const initialRemoveEventCallCount = instance.removeBodyEventListner.calls.count();

      instance.disableTether();

      // State shouldn't change
      expect(component.state('isOverlayOpen')).toBe(true);
      // Tether's disable function shouldn't be called
      expect(disableMock.calls.length).toBe(initialDisableMockCallCount);
      // Function to remove event listeners shouldn't be called
      expect(instance.removeBodyEventListner.calls.count()).toBe(initialRemoveEventCallCount);
    });

    it('should set visible state of `overlay` to false', () => {
      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      component.setState({ isOverlayOpen: true });

      const instance = component.instance();

      instance._tether = { disable: () => {} };
      instance.disableTether();

      expect(component.state('isOverlayOpen')).toBe(false);
    });
  });

  describe('#enableTether', () => {
    it('should add click event listner to document if `shouldHideOnClick` is true', () => {
      spyOn(document, 'addEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          shouldHideOnClick={ true }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      instance._tether = { enable: () => {} };
      instance.enableTether();

      expect(document.addEventListener.calls.any()).toBe(true);
      expect(instance._bodyClickListener).toBeTruthy();
      expect(document.addEventListener.calls.argsFor(0)[0]).toBe('click');
      expect(document.addEventListener.calls.argsFor(0)[1]).toBe(instance._bodyClickListener);
    });

    it('should not add click event listner to document if `shouldHideOnClick` is false', () => {
      spyOn(document, 'addEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          shouldHideOnClick={ false }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      instance._tether = { enable: () => {} };
      instance.enableTether();

      expect(instance._bodyClickListener).toBe(false);
      expect(document.addEventListener.calls.argsFor(0)[0]).not.toBe('click');
      expect(document.addEventListener.calls.argsFor(0)[1]).not.toBe(instance._bodyClickListener);
    });

    it('should add keyup event listner to document', () => {
      spyOn(document, 'addEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      instance._tether = { enable: () => {} };
      instance.enableTether();

      expect(document.addEventListener.calls.any()).toBe(true);
      expect(document.addEventListener.calls.argsFor(1)[0]).toBe('keyup');
      expect(document.addEventListener.calls.argsFor(1)[1]).toBe(instance._documentEscapeListener);
    });

    it('should call function to enable Tether', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      const enableMock = instance._tether.enable.mock;
      const initialCallCount = enableMock.calls.length;

      instance.enableTether();

      expect(enableMock.calls.length).toBe(initialCallCount + 1);
    });

    it('should call `onShow` prop if a function is provided', () => {
      const obj = { func: () => {} };
      spyOn(obj, 'func').and.stub();

      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          onShow={ obj.func }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      const initialCallCount = obj.func.calls.count();

      instance.enableTether();

      expect(obj.func.calls.count()).toBe(initialCallCount + 1);
    });

    it('should set visible state of `overlay` to true', () => {
      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      component.setState({ isOverlayOpen: false });
      const instance = component.instance();
      instance._tether = { enable: () => {} };
      instance.enableTether();

      expect(component.state('isOverlayOpen')).toBe(true);
    });

    it('should call function to position Tether', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      const positionMock = instance._tether.position.mock;
      const initialPositionMockCalls = positionMock.calls.length;

      instance.enableTether();

      // Run the `setTimeout` synchronously
      jest.runAllTimers();

      expect(positionMock.calls.length).toBe(initialPositionMockCalls + 1);
    });
  });

  describe('#getChildContext', () => {
    it('should properly set the child context', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      instance.enableTether();
      const initialCallCount = instance.disableTether.calls.count();

      component.find('[data-test-section="fake-overlay-close"]').simulate('click');

      expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
    });
  });

  describe('#isClickWithinOverlayOrChildren', () => {
    it('should call function to disable Tether if click is not within overlay or button', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      instance.isClickWithinOverlayOrChildren({ target: document.body });

      expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
    });

    it('should not call function to disable Tether if click is within overlay', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const fakeOverlayNode = component.find('[data-test-section="fake-overlay"]').get(0);

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      instance.isClickWithinOverlayOrChildren({ target: fakeOverlayNode });

      expect(instance.disableTether.calls.count()).toBe(initialCallCount);
    });

    it('should not call function to disable Tether if click is within button', () => {
      const component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const fakeButtonNode = component.find('[data-test-section="fake-button"]').get(0);

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      instance.isClickWithinOverlayOrChildren({ target: fakeButtonNode });

      expect(instance.disableTether.calls.count()).toBe(initialCallCount);
    });
  });

  describe('#onChildClick', () => {
    let component;

    beforeEach(() => {
      component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );
    });

    afterEach(() => {
      component.unmount();
      component = null;
    });

    it('should still call `children`\'s existing `onClick` if it exists', () => {
      const instance = component.instance();
      const fakeEvent = {};
      const fakeChild = { props: { onClick: () => {} } };

      spyOn(fakeChild.props, 'onClick');

      instance.onChildClick(fakeEvent, fakeChild);

      // Expect that `fakeChild`'s `onClick` was called and `fakeEvent` was
      // passed in
      expect(fakeChild.props.onClick.calls.count()).toBe(1);
      expect(fakeChild.props.onClick.calls.mostRecent().args[0]).toBe(fakeEvent);
    });

    it('should call functions to enable Tether when clicking on the children and overlay is closed', () => {
      const instance = component.instance();
      spyOn(instance, 'enableTether');
      const initialCallCount = instance.enableTether.calls.count();

      component.setState({ 'isOverlayOpen': false });

      instance.onChildClick(null, { props: {} });

      // Should call function to enable Tether
      expect(instance.enableTether.calls.count()).toBe(initialCallCount + 1);
    });

    it('should call functions to disable Tether when clicking on the children and overlay is open', () => {
      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      component.setState({ 'isOverlayOpen': true });

      instance.onChildClick(null, { props: {} });

      // Should call function to disable Tether
      expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
    });
  });

  describe('#onEscapeKey', () => {
    it('should call function to disable Tether when escape key is pressed', () => {
      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const fakeEvent = { keyCode: 27 };

      instance.onEscapeKey(fakeEvent);

      expect(instance.disableTether.calls.count()).toBe(1);
    });

    it('should not call function to disable Tether when non-escape key character is pressed', () => {
      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const fakeEvent = { keyCode: 1 };

      instance.onEscapeKey(fakeEvent);

      expect(instance.disableTether.calls.count()).toBe(0);
    });
  });

  describe('#onChildMouseOver', () => {
    let component;

    beforeEach(() => {
      component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          behavior="hover">
          <FakeButton />
        </OverlayWrapper>
      );
    });

    afterEach(() => {
      component.unmount();
      component = null;
    });

    it('should still call `children`\'s existing `onMouseOver` if it exists', () => {
      const instance = component.instance();
      const fakeEvent = {};
      const fakeChild = { props: { onMouseOver: () => {} } };

      spyOn(fakeChild.props, 'onMouseOver');

      instance.onChildMouseOver(fakeEvent, fakeChild);

      // Expect that `fakeChild`'s `onMouseOver` was called and `fakeEvent` was
      // passed in
      expect(fakeChild.props.onMouseOver.calls.count()).toBe(1);
      expect(fakeChild.props.onMouseOver.calls.mostRecent().args[0]).toBe(fakeEvent);
    });

    it('should call functions to enable Tether when mousing over the children', () => {
      const instance = component.instance();
      spyOn(instance, 'enableTether');
      const initialCallCount = instance.enableTether.calls.count();

      component.setState({ 'isOverlayOpen': false });

      instance.onChildMouseOver(null, { props: {} });

      // Should call function to enable Tether
      expect(instance.enableTether.calls.count()).toBe(initialCallCount + 1);
    });
  });

  describe('#onChildMouseOut', () => {
    let component;

    beforeEach(() => {
      component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          behavior="hover">
          <FakeButton />
        </OverlayWrapper>
      );
    });

    afterEach(() => {
      component.unmount();
      component = null;
    });

    it('should still call `children`\'s existing `onMouseOut` if it exists', () => {
      const instance = component.instance();
      const fakeEvent = {};
      const fakeChild = { props: { onMouseOut: () => {} } };

      spyOn(fakeChild.props, 'onMouseOut');

      instance.onChildMouseOut(fakeEvent, fakeChild);

      // Expect that `fakeChild`'s `onMouseOut` was called and `fakeEvent` was
      // passed in
      expect(fakeChild.props.onMouseOut.calls.count()).toBe(1);
      expect(fakeChild.props.onMouseOut.calls.mostRecent().args[0]).toBe(fakeEvent);
    });

    it('should call functions to disable Tether when mousing out of the children', () => {
      const instance = component.instance();
      spyOn(instance, 'disableTether');
      const initialCallCount = instance.disableTether.calls.count();

      component.setState({ 'isOverlayOpen': false });

      instance.onChildMouseOut(null, { props: {} });

      // Should call function to disable Tether
      expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
    });
  });

  describe('#removeBodyEventListner', () => {
    it('should remove click event listener', () => {
      spyOn(document, 'removeEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      const func = () => 42;
      instance._bodyClickListener = func;
      instance.removeBodyEventListner();

      expect(document.removeEventListener.calls.any()).toBe(true);
      expect(document.removeEventListener.calls.argsFor(0)[0]).toBe('click');
      expect(document.removeEventListener.calls.argsFor(0)[1]).toBe(func);
    });

    it('should remove keyup event listener', () => {
      spyOn(document, 'removeEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();

      const func = () => 42;
      instance._documentEscapeListener = func;
      instance.removeBodyEventListner();

      expect(document.removeEventListener.calls.any()).toBe(true);
      expect(document.removeEventListener.calls.argsFor(0)[0]).toBe('keyup');
      expect(document.removeEventListener.calls.argsFor(0)[1]).toBe(func);
    });

    it('should not attempt to remove event listeners if they were never added', () => {
      spyOn(document, 'removeEventListener');

      const component = shallow(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }>
          <FakeButton />
        </OverlayWrapper>
      );

      const instance = component.instance();
      instance.removeBodyEventListner();

      expect(document.removeEventListener.calls.any()).toBe(false);
    });
  });

  describe('#render', () => {
    let component;

    beforeEach(() => {
      component = mount(
        <OverlayWrapper
          overlay={ <FakeOverlay /> }
          testSection="foo">
          <FakeButton />
        </OverlayWrapper>
      );
    });

    afterEach(() => {
      component.unmount();
      component = null;
    });

    it('should render contents passed in as children', () => {
      expect(component.find(FakeButton).length).toBe(1);
    });

    it('should render overlay', () => {
      expect(component.find(FakeOverlay).length).toBe(1);
    });

    it('should have a properly set test section', () => {
      expect(component.find('[data-test-section="foo"]').length).toBe(1);
    });

    it('should show or hide the `overlay` depending on state', () => {
      // Start off with the default state
      expect(component.state('isOverlayOpen')).toBe(false);
      expect(component.instance()._overlayEl.getAttribute('style')).toContain('display: none');

      // Change state of `isOverlayOpen` to be true
      component.setState({'isOverlayOpen': true});

      // Expect that state has changed and prop has been updated
      expect(component.state('isOverlayOpen')).toBe(true);
      expect(component.instance()._overlayEl.getAttribute('style')).toContain('display: block');
    });

    it('should properly call `onChildClick` when a child is clicked on', () => {
      const instance = component.instance();
      spyOn(instance, 'onChildClick');

      const initialCallCount = instance.onChildClick.calls.count();

      // Simulate a click on the button
      component.find(FakeButton).parent().simulate('click');

      expect(instance.onChildClick.calls.count()).toBe(initialCallCount + 1);
      expect(instance.onChildClick.calls.mostRecent().args[1].type).toBe(FakeButton);
    });

    it('should properly call `onMouseOver` when a child is moused over', () => {
      component.setProps({ behavior: 'hover' });

      const instance = component.instance();
      spyOn(instance, 'onChildMouseOver');

      const initialCallCount = instance.onChildMouseOver.calls.count();

      // Simulate a click on the button
      component.find(FakeButton).parent().simulate('mouseover');

      expect(instance.onChildMouseOver.calls.count()).toBe(initialCallCount + 1);
      expect(instance.onChildMouseOver.calls.mostRecent().args[1].type).toBe(FakeButton);
    });

    it('should properly call `onMouseOut` when a child is moused out', () => {
      component.setProps({ behavior: 'hover' });

      const instance = component.instance();
      spyOn(instance, 'onChildMouseOut');

      const initialCallCount = instance.onChildMouseOut.calls.count();

      // Simulate a click on the button
      component.find(FakeButton).parent().simulate('mouseout');

      expect(instance.onChildMouseOut.calls.count()).toBe(initialCallCount + 1);
      expect(instance.onChildMouseOut.calls.mostRecent().args[1].type).toBe(FakeButton);
    });

    it('should throw an error if `children` is more than one element', () => {
      expect(() => {
        mount(
          <OverlayWrapper
            overlay={ <FakeOverlay /> }
            testSection="foo">
            <FakeButton />
            <FakeButton />
          </OverlayWrapper>
        );
      }).toThrowError(/React\.Children\.only/);
    });
  });
});
