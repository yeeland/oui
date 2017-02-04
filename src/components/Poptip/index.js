import React from 'react';
import OverlayWrapper from '../OverlayWrapper';
import Poptip from './Poptip';

/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PoptipWrapper = (props) => (
  <OverlayWrapper
    behavior="hover"
    overlay={ <Poptip testSection={ props.testSection }>
      { props.content }
    </Poptip> }
    horizontalAttachment={ props.horizontalAttachment }
    horizontalTargetAttachment={ props.horizontalTargetAttachment }
    verticalAttachment={ props.verticalAttachment }
    verticalTargetAttachment={ props.verticalTargetAttachment }>
    { props.children }
  </OverlayWrapper>
);

PoptipWrapper.displayName = 'Poptip';

PoptipWrapper.propTypes = {
  /** Content that, when hovered on, makes the Poptip appear */
  children: React.PropTypes.node.isRequired,
  /** Text that appears within the poptip */
  content: React.PropTypes.string.isRequired,
  /** Side of the poptip that should attach to the `children` */
  horizontalAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Side of `children` that should attach to the poptip */
  horizontalTargetAttachment: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Vertical edge of the poptip that should touch the `children` */
  verticalAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  /** Vertical edge of the `children` that should touch the poptip */
  verticalTargetAttachment: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
};

export default PoptipWrapper;
