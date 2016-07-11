import React from 'react';

const Example = (props) => {

  return (
    <div className="example">
      { props.example }
    </div>
  );
};

Example.propTypes = {
  example: React.PropTypes.object,
};

export default Example;
