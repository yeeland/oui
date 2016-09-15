import React from 'react';
import { default as Clipboard } from 'clipboard';
import { mount } from 'enzyme';

import CopyButton from '../index';

describe('components/Code/CopyButton', () => {

  // @TODO (dave.rau) Fix this stupid mess for document stubbing
  // which is currently not working

  // @QUESTION: Do we need beforeEach, or just drop this block in
  beforeEach(function() {

    // @QUESTION: How to declaring document object and the function
    // to avoid error: queryCommandSupported method doesn't exist
    spyOn(document, 'queryCommandSupported').and.callFake(function(args) {

      // @QUESTION: Do we need to target args[0] or just args?
      return args[0] === 'copy';
    });
  });

  // @QUESTION: Should we be checking if the spy method was called?
  it('should call document.queryCommandSupported() spy', function() {
    expect(document.queryCommandSupported).toHaveBeenCalled();
  });

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
