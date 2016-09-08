'use strict';

const generateFileTextSwitch = (fileName, fileNameTitleCase, sizes) => {
  let text = [];

  sizes.map((size) => {
    text.push(
      `    case ${size}:
      Svg = ${fileNameTitleCase}Icon${size};
      sizeclass = 'oui-icon--${size}';
      break;`);
  });

  return text.join('\n');
};

const generateFileTextImports = (fileName, fileNameTitleCase, sizes) => {
  let text = [];

  sizes.map((size) => {
    // eslint-disable-next-line max-len
    text.push(`const ${fileNameTitleCase}Icon${size} = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/${size}/${fileName}-${size}.svg');`);
  });

  return text.join('\n');
};

const generateFileText = (fileName, fileNameTitleCase, sizes) => {
  let text = '';

  text += `import React from 'react';

/* eslint-disable max-len */
${generateFileTextImports(fileName, fileNameTitleCase, sizes)}
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ${fileNameTitleCase}Icon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
${generateFileTextSwitch(fileName, fileNameTitleCase, sizes)}
    default:
      Svg = ${fileNameTitleCase}Icon${sizes[0]};
      sizeclass = \`oui-icon--\${ props.size }\`;
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

${fileNameTitleCase}Icon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf(12, 16, 24).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ${fileNameTitleCase}Icon;
`;

  return text;
};

const generateIndexFileText = (iconsArr) => {
  let text = [];

  let imports = iconsArr.map((iconName) => {
    return `import ${iconName}Icon from './${iconName}Icon';`;
  });

  text = imports;

  text.push('');
  text.push('export default {');

  let exports = iconsArr.map((iconName) => {
    return `  ${iconName}Icon,`;
  });

  text.push(exports.join('\n'));

  text.push('};');
  text.push('');

  return text.join('\n');
};

module.exports = {
  generateFileTextSwitch,
  generateFileTextImports,
  generateFileText,
  generateIndexFileText,
};
