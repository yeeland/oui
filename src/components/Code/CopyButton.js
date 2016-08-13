import React from 'react';

import Button from '../Button';
import { ClipboardIcon } from '../Icon';

import { default as Clipboard } from 'clipboard';

class CopyButton extends React.Component {
  componentDidMount() {
    let code = this.props.children;

    this._clipboard = new Clipboard(this._button, {
      text() {
        return code;
      },
    });
  }

  componentWillUnmount() {
    this._clipboard.destroy();
  }

  render() {
    let buttonTestSection = this.props.testSection ? this.props.testSection + '-copy-button' : null;

    return (
      <div
        style={ { position: 'absolute', right: 0 } }
        ref={ (el) => { this._button = el; } }>
        <Button
          style="plain"
          testSection={ buttonTestSection }>
          Copy
        </Button>
      </div>
    );
  }
};

export default CopyButton;
