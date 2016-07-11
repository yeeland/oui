import React from 'react';
import Table from '../src/components/Table';

const PropsTable = (props) => {
  let componentProps = props.componentProps;
  let data = [];

  if (componentProps) {
    Object.keys(componentProps).map((prop, i) => {

      // name with *required comment
      let propDisplayName = prop;
      if (componentProps[prop].required) {
        propDisplayName = '*' + prop + ' (required)';
      }

      // handle enum types
      let propDisplayType = componentProps[prop].type.name;
      if (propDisplayType === 'enum') {
        propDisplayType = <Table data={ componentProps[prop].type.value.map(v => [v.value]) } />;
      }

      data.push(
        [
          propDisplayName,
          propDisplayType,
          componentProps[prop].description,
        ]
      );
    });
  }

  return (
    <Table
      className="table"
      headings={ ['Prop', 'Type', 'Description'] }
      data={ data }
      style="rule"
    />
  );
};

PropsTable.propTypes = {
  componentProps: React.PropTypes.object,
  props: React.PropTypes.object,
};

export default PropsTable;
