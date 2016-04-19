import React from 'react';

let inlineCode = (children) => {
  return (
    <code className="code">
      { children }
    </code>
  )
};

let blockCode = (children) => {
  return (
    <pre className="pre"><code>{ children }</code></pre>
  )
};

const Code = ({ children, type }) => {
  return (
    <div>
      { type === 'block' ? blockCode(children) : null }
      { type === 'inline' ? inlineCode(children) : null }
    </div>
  );
};

Code.propTypes = {
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
