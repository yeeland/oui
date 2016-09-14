import React from 'react';
import { default as Clipboard } from 'clipboard';
import { mount } from 'enzyme';

import CopyButton from '../index';

describe('components/Code/CopyButton', () => {
  it('should render a button', () => {
    const component = mount(<CopyButton code="foo" />);
    expect(component.find('button').length).toEqual(1);
  });

  it('should call clipboard function when button is clicked on', () => {
    let code = 'var foo;';

    spyOn(Clipboard.prototype, 'resolveOptions').and.stub();

    mount(<CopyButton code={ code } />);

    expect(Clipboard.prototype.resolveOptions.calls.argsFor(0)[0].text()).toEqual(code);
  });

  it('should destroy clipboard after button is clicked on', () => {
    spyOn(Clipboard.prototype, 'destroy').and.stub();

    const component = mount(<CopyButton code="goose" />);

    component.unmount();

    expect(Clipboard.prototype.destroy.calls.count()).toEqual(1);
  });

  it('should have a properly set test section', () => {
    const component = mount(
      <CopyButton code="goose" testSection="goose" />
    );
    expect(component.find('[data-test-section="goose-copy-button"]').length).toBe(1);
  });
});
