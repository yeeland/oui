import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { CloseIcon } from '../Icon';

const renderDismissButton = (testSection) => {
  return (
    <div className="oui-attention__close">
      <Button
        style="link"
        ariaLabel="Close alert"
        testSection={ testSection + '-dismiss' }>
        <CloseIcon size={ 24 } />
      </Button>
    </div>
  );
};

/**
 * Form fields where each row is a set of fields, buttons and text.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const FormsTest = (props) => {

  return (
    <div className="border--all">
      <div className="oui-formtest__header soft soft-double--sides background--faint border--bottom flex">
        <div className="weight--bold flex--1">{ props.variation }</div>
        { props.isDismissible ? renderDismissButton(props.testSection) : null }
      </div>

      <div className="oui-formtest__body soft-double hard--left">
        <form>
          <fieldset className="push--bottom soft-double--left">
            <ol className="oui-form-fields">
              <li className="oui-form-field__item">
                <div className="oui-grid">

                  <div className="soft-double--left flex--1">
                    <Input
                      label="Variation Key"
                      type="text"
                      placeholder="Enter a key"
                      value={ props.variation }
                      onChange={
                        function(event) {
                          console.log(event.target.value); // eslint-disable-line no-console
                        }
                      }
                    />
                  </div>

                  <div className="soft-double--left flex--none ">
                    <span className="flex flex-align--end">
                      <Input
                        type="number"
                        label="Traffic Distribution"
                        defaultValue={ props.trafficDistribution }
                      />
                      <span className="push-half--left push-half--bottom">%</span>
                    </span>
                  </div>
                </div>
              </li>

              <li className="oui-form-field__item">
                <Input
                  label="Description"
                  type="text"
                  value={ props.description }
                />
              </li>
            </ol>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

FormsTest.propTypes = {
  /** Description */
  description: React.PropTypes.string,
  /** Button allowing users to dismiss the component */
  isDismissible: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** Traffic allocation for this variation */
  trafficDistribution: React.PropTypes.number,
  /** Variation name */
  variation: React.PropTypes.string,
};

export default FormsTest;
