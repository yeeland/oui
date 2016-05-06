import React from 'react';
import * as testHelpers from '../../../utils/test-helpers';
import Button from '../index';

describe('components/Button', () => {
  it('should call function that is passed in as `onClick` after click', () => {
    const obj = {
      func: () => {},
    };
    spyOn(obj, 'func').and.stub();

    const component = testHelpers.renderIntoDocument(
      <Button onClick={ obj.func }>Hello!</Button>
    );

    const componentNode = testHelpers.getNodeFromComponent(component);
    testHelpers.simulate.click(componentNode);

    expect(obj.func).toHaveBeenCalled();
  });

});
