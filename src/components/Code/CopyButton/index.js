import React from 'react';
import { default as Clipboard } from 'clipboard';

import Button from '../../Button';
import ClipboardIcon from '../../Icon/ClipboardIcon';

class CopyButton extends React.Component {
  componentDidMount() {
    this._clipboardListener = new Clipboard(this._buttonContainer, {
      text: () => this.props.code,
    });
  }

  componentWillUnmount() {
    this._clipboardListener.destroy();
  }

  render() {
    let buttonTestSection = this.props.testSection ? this.props.testSection + '-copy-button' : null;

    return (
      /* eslint-disable react/jsx-no-bind */
      <div
        style={ { position: 'absolute', right: 0 } }
        ref={ (c) => { this._buttonContainer = c; } }>
        <Button
          style="plain"
          ariaLabel="Copy code snippet"
          testSection={ buttonTestSection }>
          <ClipboardIcon size={ 16 } />
        </Button>
      </div>
      /* eslint-enable */
    );
  }
}

CopyButton.propTypes = {
  /** The code that will be copied */
  code: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CopyButton;
