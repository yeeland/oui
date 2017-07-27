import React from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Generates an `ProgressBar` element
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const ProgressBar = (props) => {
  const {
    progress,
    topLabel,
    leftLabel,
    rightLabel,
    min = 0,
    max = 100,
  } = props;
  return (
    <div>
      <label className="oui-label">{topLabel}</label>
      <div className="lego-progress">
        <div
          className="lego-progress__bar"
          style={ `width: ${progress}%;` }
          aria-valuenow={ `${progress}` }
          aria-valuemin={ min }
          aria-valuemax={ max }>
        </div>
      </div>
      <div className="flex flex--1 push-half--top">
        <div className="flex flex--1 muted milli">
          {`${leftLabel}: ${progress}%`}
        </div>
        <div className="flex flex--1 muted milli flex-justified--end">
          {`${rightLabel}: ${progress - 100}%`}
        </div>
      </div>
    </div>
      /* eslint-enable */
    );
};

ProgressBar.propTypes = {
  /** left label */
  leftLabel: PropTypes.string,
  /** max */
  max: PropTypes.string,
  /** min */
  min: PropTypes.string,
  /** string data for progress */
  progress: PropTypes.string,
  /** right label */
  rightLabel: PropTypes.string,
  /** top label*/
  topLabel: PropTypes.string,
};

export default ProgressBar;
