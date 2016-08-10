import React from 'react';
import Button from '../Button';
import { CloseIcon } from '../Icon';

const FormRow = (rows) => {
  return (
    <ol className="oui-form-fields">
      { rows.map((row, i) => {
        return (
          <li
            key={ i }
            className="oui-form-field__item flex">
            { row.map((item, j) => {
              return (
                <div
                  className="flex--1 soft-double--left"
                  key={ j }>
                  { item }
                </div>
              );
            }) }
          </li>
        );
      }) }
    </ol>
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
        <div className="weight--bold flex--1">variation_1</div>
        <Button style="link">
          <CloseIcon size={ 24 } testSection="attention-close-icon" />
        </Button>
      </div>

      <div className="oui-formtest__body soft-double hard--left">
        <form>
          <fieldset className="push--bottom">
            { FormRow(props.rows) }
          </fieldset>
          <fieldset className="push-quad--top push--bottom soft-double--left">
            <ol className="oui-form-fields">
              <li className="oui-form-field__item">
                <div className="oui-grid">
                  <div className="soft-double--left flex--1">
                    <label className="oui-label">Variation Key</label>
                    <input type="text" className="oui-text-input" value="variation_1" />
                  </div>
                  <div className="soft-double--left flex--none ">
                    <label className="oui-label">Traffic Distribution</label>
                    <span className="flex flex-align--center">
                      <input type="text" className="oui-text-input  text--right push-half--right" placeholder="50" />
                      <span className="">%</span>
                    </span>
                  </div>
                </div>
              </li>

              <li className="oui-form-field__item">
                <label className="oui-label">Description <span className="oui-label__optional">(Optional)</span></label>
                <input className="oui-text-input" value="" />
              </li>

            </ol>
          </fieldset>
        </form>
      </div>

      <div className="oui-formtest__footer background--faint border--top soft-double">
        <form>
          <fieldset className="flush--bottom">
            <ol className="oui-form-fields">
              <li className="oui-form-field__item">
                <div className="oui-grid">
                  <div className="soft-double--left flex--1">
                    <label className="oui-label">Live Variable Key</label>
                    <input type="text" className="oui-text-input" value="variable_1" />
                  </div>
                  <div className="soft-double--left flex--1">
                    <label className="oui-label">Value
                      <span className="oui-label--required oui-label__optional">(Required)</span>
                    </label>
                    <input type="text" className="oui-text-input" placeholder="variable_1" />
                  </div>
                  <div className="soft-double--left flex--1">
                    <label className="oui-label">Type</label>
                    <select name="zoo" id="zoo" className="oui-select background--white width--1-1">
                      <option value="one">String</option>
                      <option value="two">Boolean</option>
                    </select>
                  </div>
                  <div className="soft-double--left flex--none flex flex-justified--center flex-align--end">
                    <button className="oui-button oui-button--plain hard--sides">Delete</button>
                  </div>
                </div>
              </li>

              <li className="oui-form-field__item">
                <Button
                  style="link"
                  hasLinkColor={ true }>
                  Add Live Variable...
                </Button>
              </li>

            </ol>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

FormsTest.propTypes = {
  /** Form rows for each fieldset */
  rows: React.PropTypes.array,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default FormsTest;
