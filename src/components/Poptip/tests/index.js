import React from 'react';
import Poptip from '../index';
import { shallow } from 'enzyme';

describe('components/Poptip', () => {
  it('should render an `OverlayWrapper` with correct props', () => {
    const component = shallow(
      <Poptip
        content="goose"
        horizontalAttachment="center"
        horizontalTargetAttachment="center"
        verticalAttachment="middle"
        verticalTargetAttachment="middle"
        testSection="heeeeeloooo">
        <button>duck</button>
      </Poptip>
    );

    const OverlayWrapper = component.find('OverlayWrapper');

    expect(OverlayWrapper.length).toBe(1);
    expect(OverlayWrapper.prop('behavior')).toBe('hover');
    expect(OverlayWrapper.prop('overlay').props.children).toBe('goose');
    expect(OverlayWrapper.prop('overlay').props.testSection).toBe('heeeeeloooo');
    expect(OverlayWrapper.prop('children').type).toBe('button');
  });
});
