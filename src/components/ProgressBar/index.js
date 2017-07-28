import PropTypes from 'prop-types';
import React from 'react';

import classnames from 'classnames';

import Label from '../Label';

/**
 * Generates an `ProgressBar` element
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const ProgressBar = (props) => {
  const {
    displayError = false,
    leftLabel,
    max = 100,
    min = 0,
    progress,
    rightLabel,
    topLabel,
  } = props;

  const ouiProgress = classnames(
    'oui-progress',
    { 'oui-progress--bad-news': displayError }
  );

  let range = max - min;
  let allocated = Math.round(progress / range * 100);
  let available = Math.round(100 - allocated);

  return (
    <div>
      { topLabel &&
        <Label>{ topLabel }</Label>
      }
      <div className={ ouiProgress }>
        <div
          className="oui-progress__bar"
          style={{ 'width': `${allocated}%`}}
          aria-valuenow={ `${allocated}` }
          aria-valuemin={ min }
          aria-valuemax={ max }>
          { !leftLabel && `${allocated}%`}
        </div>
      </div>
      { leftLabel && rightLabel &&
        <div className="flex flex--1 push-half--top">
          <div className="flex flex--1 muted milli">
            {`${leftLabel}: ${allocated}%`}
          </div>
          <div className="flex flex--1 muted milli flex-justified--end">
            {`${rightLabel}: ${available}%`}
          </div>
        </div>
      }
    </div>
      /* eslint-enable */
    );
};

ProgressBar.propTypes = {
  /** badNews will change the progress bar color to red */
  displayError: PropTypes.bool,
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
