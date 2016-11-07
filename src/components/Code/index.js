import React from 'react';

import CopyButton from './CopyButton';

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
    return (
      <code
        className='oui-code'
        data-test-section={ props.testSection }>
        { props.children }
      </code>
    );
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
        <code>
          { props.children }
        </code>
      </pre>
    </div>
  );
};

Code.propTypes = {
  /** The code within the component */
  children: React.PropTypes.string,
  /** Adds a copy button to code examples */
  hasCopyButton: React.PropTypes.bool,
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
