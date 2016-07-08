import React from 'react';

const cellClasses = (index, collapsedColumns, numberedColumns) => {
  let classes = [];

  if (collapsedColumns && collapsedColumns.indexOf(index) !== -1) {
    classes.push('oui-cell-collapse');
  }

  if (numberedColumns && numberedColumns.indexOf(index) !== -1) {
    classes.push('oui-numerical');
  }

  return classes.join(' ');
};

const TableHead = (headings, collapsedColumns, numberedColumns) => {
  if (!headings) {
    return;
  }

  return (
    <thead>
      <tr>
        { headings.map((heading, i) => {
          let classes = cellClasses(i, collapsedColumns, numberedColumns);

          return (
            <th
              key={ i }
              className={ classes }>
              { heading }
            </th>
          );
        }) }
      </tr>
    </thead>
  );
};

const TableBody = (rows, collapsedColumns, numberedColumns) => {
  return (
    <tbody>
      { rows.map((row, i) => {
        return (
          <tr key={ i }>
            { row.map((item, j) => {
              let classes = cellClasses(j, collapsedColumns, numberedColumns);

              return (
                <td
                  className={ classes }
                  key={ j }>
                  { item }
                </td>
              );
            }) }
          </tr>
        );
      }) }
    </tbody>
  );
};

/**
 *
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Table = (props) => {
  let styleClass = props.style ? `oui-table--${props.style}` : '';

  return (
    <table
      className={ `oui-table ${styleClass}` }
      data-test-section={ props.testSection }>
      { TableHead(props.headings, props.collapsedColumns, props.numberedColumns) }
      { TableBody(props.data, props.collapsedColumns, props.numberedColumns) }
    </table>
  );
};

Table.propTypes = {
  /** Array of the column numbers, starting at 0, that should be collapsed */
  collapsedColumns: React.PropTypes.array,
  /** Array of data that appears within the table */
  data: React.PropTypes.array.isRequired,
  /** Headings for the `th` */
  headings: React.PropTypes.array,
  /**
   * Array of the column numbers, starting at 0, that should be right-aligned
   */
  numberedColumns: React.PropTypes.array,
  /** Available border and hover options */
  style: React.PropTypes.oneOf(['wall', 'rule']),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default Table;
