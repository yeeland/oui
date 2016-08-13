import React from 'react';

import * as Highlight from 'highlight.js';
import { default as Clipboard } from 'clipboard';

import CopyButton from './CopyButton';

const HighlightedCode = (code, isHighlighted, language, className, testSection) => {
  let dangerouslySetInnerHTML = null;

  if (isHighlighted) {
    // Code that uses syntax highlighting needs to have
    // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
    require('highlight.js/styles/docco.css');

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
class Code extends React.Component {
  render() {
    return (
      /* eslint-disable react/jsx-no-bind */
      <div className="position--relative">
        <CopyButton testSection={ this.props.testSection }>
          { this.props.children }
        </CopyButton>

        <pre
          className="oui-pre"
          data-test-section={ this.props.testSection }>
          { HighlightedCode(this.props.children, this.props.isHighlighted, this.props.language) }
        </pre>
      </div>
      /* eslint-enable react/jsx-no-bind */
    );
  }
}

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
