import React from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Generates an `ProgressBar` element
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <label className="oui-label">Traffic Allocatio</label>
      <div className="lego-progress">
        <div className="lego-progress__bar" style="width: 35%;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="flex flex--1 push-half--top">
        <div className="flex flex--1 muted milli">
          Allocated: 35%
        </div>
        <div className="flex flex--1 muted milli flex-justified--end">
          Available: 65%
        </div>
      </div>
    </div>
      /* eslint-enable */
    );
};

ProgressBar.propTypes = {
  /** The default value of the input used on initial render */
  progress: PropTypes.string,
};

export default ProgressBar;
