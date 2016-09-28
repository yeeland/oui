import React from 'react';
import { default as Clipboard } from 'clipboard';

import Button from '../../Button';
import ClipboardIcon from '../../Icon/ClipboardIcon';

class CopyButton extends React.Component {
  componentDidMount() {
    if (this.supportsCopyAPI() && this._buttonContainer) {
      this._clipboardListener = new Clipboard(this._buttonContainer, {
        text: () => this.props.code,
      });
    }
  }

  componentWillUnmount() {
    if (this._clipboardListener) {
      this._clipboardListener.destroy();
    }
  }

  supportsCopyAPI() {
    return document && typeof document.queryCommandSupported === 'function' && document.queryCommandSupported('copy');
  }

  render() {
    if (!this.supportsCopyAPI()) {
      return null;
    }

    let buttonTestSection = this.props.testSection ? this.props.testSection + '-copy-button' : null;

    return (
      /* eslint-disable react/jsx-no-bind */
      <div
        style={ { position: 'absolute', right: 0, top: '5px' } }
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
