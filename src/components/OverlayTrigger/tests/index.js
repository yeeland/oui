import React from 'react';
import OverylayTrigger from '../index';
import { shallow, mount } from 'enzyme';

const FakeButton = (props) => {
  return <button { ...props }></button>;
};

const FakeOverlay = (props) => {
  return <div></div>;
};

describe('components/OverlayTrigger', () => {
  it('should render contents passed in as children', () => {
    const message = 'Hello!';
    const component = mount(
      <OverylayTrigger overlay={ <FakeOverlay /> }>
        <FakeButton>{ message }</FakeButton>
      </OverylayTrigger>
    );
    expect(component.text()).toBe(message);
  });

  it('should render overlay', () => {});
  it('should pass user supplied prop to overlay component with correct value depending on state', () => {});
  it('should pass `onClick` function to `children` that changes state of `OverlayTrigger`', () => {});
  it('should still call `children`\'s existing `onClick` if it exists', () => {});
  it('should pass the correct arguments to Tether', () => {});
  it('should destroy Tether on unmount', () => {});

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
