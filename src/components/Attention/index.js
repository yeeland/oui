import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import CloseIcon from '../Icon/CloseIcon';
import classNames from 'classnames';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

const renderDismissButton = (testSection) => {
  return (
    <div className="oui-attention__close">
      <Button
        style="plain"
        size="small"
        ariaLabel="Close alert"
        testSection={ testSection + '-dismiss' }>
        <CloseIcon size={ 16 } />
      </Button>
    </div>
  );
};

/**
 * Provide contextual feedback with a wide range of styles that can be used to
 * convey the message's importance.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Attention = (props) => {
  let colorClassName = props.type ? 'oui-attention--' + props.type : '';
  let alignmentClassName = (props.alignment === 'center') ? 'oui-text--center' : '';
  let attentionAriaLabel = props.type ? getAssistiveTextFromColorClass(props.type) : null;
  let alignClass = ('oui-attention ' + colorClassName + ' ' + alignmentClassName).trim();
  let classes = classNames({
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
    [`${alignClass}`]: true,
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }
      data-test-section={ props.testSection }
      aria-label={ attentionAriaLabel }
      role="alert">
      { props.isDismissible ? renderDismissButton(props.testSection) : null }
      { props.children }
    </div>
  );
};

Attention.propTypes = {
  /** How the text is aligned */
  alignment: PropTypes.oneOf(['left', 'center']),
  /** Text that appears within the component */
  children: PropTypes.string.isRequired,
  /** Button allowing users to dismiss the component */
  isDismissible: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Various color schemes */
  type: PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
