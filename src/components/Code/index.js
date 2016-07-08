import React from 'react';

import * as highlight from 'highlight.js';

const highlightCode = (code, isHighlighted, language, className, testSection) => {
  let codeElement = null;

  if (isHighlighted) {
    // Code that uses syntax highlighting needs to have
    // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
    require('highlight.js/styles/docco.css');

    let highlightedCode = language ? highlight.highlight(language, code).value : highlight.highlightAuto(code).value;

    codeElement = (
      /* eslint-disable react/no-danger */
      <code
        className={ className }
        data-test-section={ testSection }
        dangerouslySetInnerHTML={ { __html: highlightedCode } }>
      </code>
      /* eslint-enable react/no-danger */
    );
  } else {
    codeElement = (
      <code
        className={ className }
        data-test-section={ testSection }>
        { code }
      </code>
    );
  }

  return codeElement;
};

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Code = (props) => {
  if (props.type === 'inline') {
    return highlightCode(props.children, props.isHighlighted, props.language, 'oui-code', props.testSection);
  }

  return (
    <pre
      className="oui-pre"
      data-test-section={ props.testSection }>
      { highlightCode(props.children, props.isHighlighted, props.language) }
    </pre>
  );
};

Code.propTypes = {
  /** The code within the component */
  children: React.PropTypes.string.isRequired,
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
