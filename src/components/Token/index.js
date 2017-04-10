import React from 'react';
// import EllipsisIcon from '../Icon/EllipsisIcon';
const EllipsisIcon = require('oui-icons').Icon.EllipsisIcon;
import DismissButton from './DismissButton';
import classNames from 'classnames';

/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Token = (props) => {
  const tokenToolsClasses = classNames({
    'oui-token-tool': props.isDraggable,
  });

  return (
    /* eslint-disable react/jsx-boolean-value */
    <div
      className="oui-token-wrap flex"
      data-test-section={ props.testSection }>
      <div
        className={ tokenToolsClasses }
        data-token-handle>
        { props.order &&
          <span className="oui-token__number">
            { props.order }
          </span>
        }
        { props.isDraggable &&
          <div className="oui-icon oui-token__move">
            <EllipsisIcon size={ 16 } />
          </div>
        }
      </div>
      <div className={ 'oui-token oui-token--' + props.style }>
        <div>
          { props.name }
          { props.description &&
            <div className="oui-token__description">
              { props.description }
            </div>
          }
        </div>
        { (props.isDismissible && props.onDismiss) &&
          <DismissButton
            onClick={ props.onDismiss }
            testSection={ props.testSection }
          />
        }
      </div>
    </div>
    /* eslint-enable */
  );
};

Token.propTypes = {
  /** Description explaining the token */
  description: React.PropTypes.string,
  /**
   * Determines if token has dismissible feature or not. If true, `onDismiss`
   * is required.
   */
  isDismissible: React.PropTypes.bool,
  /** Shows an icon indicating that the token is draggable */
  isDraggable: React.PropTypes.bool,
  /** Name label on token */
  name: React.PropTypes.string.isRequired,
  /**
   * Function to call that dismisses the token. Required if the token is
   * dismissible.
   */
  onDismiss: React.PropTypes.func,
  /** Show a number indicating the token's order */
  order: React.PropTypes.number,
  /** Determines style of token depending on priority level */
  style: React.PropTypes.oneOf(['primary', 'secondary']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Token.defaultProps = {
  isDismissible: false,
  style: 'secondary',
};

export default Token;
