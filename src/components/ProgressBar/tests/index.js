import React from 'react';
import ProgressBar from '../index';
import { shallow, mount } from 'enzyme';

describe('components/ProgressBar', () => {
  it('should render a progressbar with a top label', () => {
    const wrapper = mount(
      <ProgressBar
        topLabel="this is a top label"
      />
    );

    expect(wrapper.props().topLabel).toEqual('this is a top label');
  });

  it('should render a progressbar with left and right bottom ', () => {
    const wrapper = mount(
      <ProgressBar
        leftLabel="this is a left bottom label"
      />
    );

    expect(wrapper.props().leftLabel).toEqual('this is a left bottom label');
  });

  it('should render a progressbar with left and right bottom label', () => {
    const wrapper = mount(
      <ProgressBar
        rightLabel="this is a right bottom label"
      />
    );

    expect(wrapper.props().rightLabel).toEqual('this is a right bottom label');
  });

  it('should render a progressbar with prop min equal to 0', () => {
    const wrapper = mount(
      <ProgressBar
        min="0"
      />
    );

    expect(wrapper.props().min).toEqual('0');
  });
  it('should render a progressbar with prop max equals to 100', () => {
    const wrapper = mount(
      <ProgressBar
        max="100"
      />
    );

    expect(wrapper.props().max).toEqual('100');
  });
  it('should render a progressbar with progress prop equal to 60', () => {
    const wrapper = mount(
      <ProgressBar
        progress="60"
      />
    );

    expect(wrapper.props().progress).toEqual('60');
  });
  it('should render a progressbar with min, max and progress props', () => {
    const wrapper = mount(
      <ProgressBar
        progress="60"
      />
    );

    expect(wrapper.props().progress).toEqual('60');
  });
  it('should render a progressbar with error have displayError set to true', () => {
    const wrapper = mount(
      <ProgressBar
        displayError={ true }
      />
    );

    expect(wrapper.props().displayError).toEqual(true);
  });
});
