import React from 'react';

/**
 * Form fields where each row is a set of fields, buttons and text.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const FormsTest = (props) => {
  return (
    // <span
    //   className={ 'oui-arrow-inline--' + props.direction }
    //   aria-hidden="true"
    //   data-test-section={ props.testSection }>
    // </span>
    <div className="border--all">
      { /* <!-- [?] v2 styles remove header bg --> */ }
      <div className="oui-formtest__header soft soft-double--left background--faint border--bottom flex">
        <div className="weight--bold">variation_1</div>
        { /* <!-- replace with <icon> and proper <button> --> */ }
        <button className="oui-button oui-button--plain anchor--right push--right hard">x</button>
      </div>

      <div className="oui-formtest__body soft-double">
        <form>
          <fieldset className="push--bottom">
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
          { /* <!-- [?] fieldset margin-bottom: 60px default --> */ }
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
                { /* <!-- [?] a vs button --> */ }
                <button className="oui-button oui-button--plain hard--left">Add Live Variable...</button>
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
