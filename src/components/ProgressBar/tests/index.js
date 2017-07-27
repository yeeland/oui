import React from 'react';
import ProgressBar from '../index';
import Label from '../../Label';
import { shallow } from 'enzyme';

describe('components/ProgressBar', () => {
  it('should render a progressbar with a top label', () => {
    const wrapper = shallow(
      <ProgressBar topLabel="this is a top label" />
    );
    expect(wrapper.prop('topLable')).toEqual('this is a top label');
  });
});
