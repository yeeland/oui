import React from 'react';
import * as Highlight from 'highlight.js';

import CopyButton from 'components/Code/CopyButton';

const HighlightedCode = (code, isHighlighted, language, className, testSection) => {
  let dangerouslySetInnerHTML = null;

  if (isHighlighted) {
    // Code that uses syntax highlighting needs to have
    // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
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
  if (!props.children) {
    return null;
  }

  let copy = null;

  if (props.type === 'inline') {
    return HighlightedCode(props.children,
      props.isHighlighted,
      props.language,
      'oui-code',
      props.testSection);
  }

  if (props.hasCopyButton) {
    copy = <CopyButton code={ props.children } testSection={ props.testSection } />;
  }

  return (
    <div className="position--relative">
      { copy }
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
  children: React.PropTypes.string,
  /** Adds a copy button to code examples */
  hasCopyButton: React.PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: React.PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: React.PropTypes.oneOf(['css', 'diff', 'html', 'java', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'python', 'ruby', 'scss',
    'swift']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** How the code should be displayed */
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
