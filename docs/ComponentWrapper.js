import React from 'react';
import PropsTable from './PropsTable';
import ComponentRow from './ComponentRow';

const ComponentWrapper = (props) => {

  return (
    <div
      className="push-quad--ends soft-quad--ends"
      id={ props.title }>

      <header className="push-double--bottom">
        <h2 className="weight--bold">
          { props.title }
        </h2>
        <p>{ props.description }</p>
      </header>

      <div className="example">
        { props.examples.map((exampleObject, i) => {

          return (
            <ComponentRow
              key={ i }
              components={ exampleObject.examples }
              backgroundColor={ exampleObject.backgroundColor }
              isPadded={ exampleObject.isPadded }
            />);

        }) }
      </div>

      <PropsTable componentProps={ props.props } />
    </div>
  );
};

ComponentWrapper.propTypes = {
  description: React.PropTypes.string,
  examples: React.PropTypes.array,
  props: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
};

export default ComponentWrapper;
