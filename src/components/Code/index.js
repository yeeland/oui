import React from 'react';

import Button from '../Button';
import CopyIcon from '../Icon/ClipboardIcon';

import * as Highlight from 'highlight.js';
import { default as Clipboard } from 'clipboard';

/**
 * Copies the provided code when clicking on a copy button. It uses
 * clipboard.js to copy the text and hackily adds a temporary DOM node to
 * add a listener and simulate a click in order to get around weird
 * clipboard.js restrictions.
 * @param {Object} event - Click event
 * @param {String} code - Code to be copied
 */
const onCopyClick = (event, code) => {
  // Create a temporary element to serve as a click handler for clipboard.js.
  let button = event.target;
  let temporaryListenerNode = button.parentNode.insertBefore(document.createElement('button'), button);

  let clipboardListener = new Clipboard(temporaryListenerNode, {
    text: function() {
      return code;
    },
  });

  // Simulate a click on the temporary listener.
  temporaryListenerNode.click();

  // Clean up all the mess.
  clipboardListener.destroy();
  temporaryListenerNode.remove();
};

const CopyButton = (code, testSection) => {
  let buttonTestSection = testSection ? testSection + '-copy-button' : null;

  return (
    <div style={ { position: 'absolute', right: 0 } }>
      <Button
        style="plain"
        onClick={ function(event) { onCopyClick(event, code); } }
        testSection={ buttonTestSection }>
        <CopyIcon
          size={ 16 }>
        </CopyIcon>
      </Button>
    </div>
  );
};

const HighlightedCode = (code, isHighlighted, language, className, testSection) => {
  let dangerouslySetInnerHTML = null;

  if (isHighlighted) {
    // Code that uses syntax highlighting needs to have
    // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
    // use require ! prefix to ignore local webpack config
    require('!style-loader!css-loader!highlight.js/styles/docco.css');

    dangerouslySetInnerHTML = {
      __html: language ? Highlight.highlight(language, code).value :
                         Highlight.highlightAuto(code).value,
    };
    code = null;
  }

  return (
    /* eslint-disable react/no-danger */
    <code
      className={ className }
      data-test-section={ testSection }
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }>
      { code }
    </code>
    /* eslint-enable react/no-danger */
  );
};

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Code = (props) => {
  if (props.type === 'inline') {
    return HighlightedCode(props.children, props.isHighlighted, props.language, 'oui-code', props.testSection);
  }

  return (
    <div className="position--relative">
      { props.hasCopyButton ? CopyButton(props.children, props.testSection) : null }

      <pre
        className="oui-pre"
        data-test-section={ props.testSection }>
        { HighlightedCode(props.children, props.isHighlighted, props.language) }
      </pre>
    </div>
  );
};

Code.propTypes = {
  /** The code within the component */
  children: React.PropTypes.string.isRequired,
  /** Adds a copy button to code examples */
  hasCopyButton: React.PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: React.PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: React.PropTypes.oneOf(['css', 'diff', 'html', 'java', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'ruby', 'scss',
    'swift']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** How the code should be displayed */
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
