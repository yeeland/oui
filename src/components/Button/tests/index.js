import React from 'react';
import Button from 'components/Button';
import { shallow } from 'enzyme';

describe('components/Button', () => {
  it('should call function that is passed in as `onClick` after click', () => {
    const obj = {
      func: () => {},
    };
    spyOn(obj, 'func').and.stub();

    const component = shallow(
      <Button onClick={ obj.func }>Hello!</Button>
    );

    component.simulate('click');

    expect(obj.func).toHaveBeenCalled();
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Button testSection="foo">Hello!</Button>
    );

    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should add the active class if isActive is true', () => {
    const component = shallow(
      <Button isActive={ true }>Hello!</Button>
    );

    expect(component.hasClass('is-active')).toBe(true);
  });
});
