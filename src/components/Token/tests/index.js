import React from 'react';
import Token from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Token', () => {
  it('should render button when `isDismissible` is true', () => {
    const component = mount(<Token isDismissible={ true } name="Goose" testSection="goose" />);
    expect(component.find('[data-test-section="goose-dismiss"]').length).toBe(1);
  });

  it('should not render button when `isDismissible` is not provided', () => {
    const component = mount(<Token testSection="goose" name="Goose" />);
    expect(component.find('[data-test-section="goose-dismiss"]').length).toBe(0);
  });

  it('should render correct prop for `style` when not specified', () => {
    const component = shallow(<Token name="Goose" />);
    expect(component.find('.oui-token--secondary').length).toBe(1);
    expect(component.find('.oui-token--primary').length).toBe(0);
  });

  it('should render correct prop for `style` when specified', () => {
    const component = shallow(<Token style="primary" name="Goose" />);
    expect(component.find('.oui-token--primary').length).toBe(1);
    expect(component.find('.oui-token--secondary').length).toBe(0);
  });

  it('should properly display name on token passed down by props', () => {
    const component = shallow(<Token name="goose" />);
    expect(component.text()).toBe('goose');
  });

  it('should have a properly set test section', () => {
    const component = shallow(<Token testSection="goose" name="Goose" />);
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
});
