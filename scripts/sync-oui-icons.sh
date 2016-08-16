#!/bin/bash

ICON_DIRECTORY="src/components/Icon"
ICON_MAIN_FILE="$ICON_DIRECTORY/index.js"
OUI_ICONS_SRC_DIRECTORY="node_modules/oui-icons/src"

# Remove `Icon` subdirectories and the index file since they'll be generated.
rm -r $(echo "$ICON_DIRECTORY/*/")
rm $ICON_MAIN_FILE

for f in $OUI_ICONS_SRC_DIRECTORY/**/*.svg; do
  # Split the SVG path into an array called `file_path
  IFS='/' read -r -a file_path <<< "$f"

  # Grab the file name and extract relevant parts
  file_size=${file_path[3]}
  file_name=$(sed "s/-${file_size}\.svg//g" <<< ${file_path[4]})

  # Split the component by hyphen to create a TitleCase name
  IFS='-' read -r -a file_name_parts <<< "$file_name"
  component_name=''

  for part in ${file_name_parts[@]}; do
    # Capitalize the first letter of each word
    part="$(tr '[:lower:]' '[:upper:]' <<< ${part:0:1})${part:1}"
    component_name="$component_name$part"
  done;

  component_name="${component_name}Icon"

  component_directory="$ICON_DIRECTORY/${component_name}"
  component_file="$component_directory/index.js"

  # Create directories for each icon if it doesn't exist.
  if [ ! -d "$component_directory" ]; then
    mkdir -v "$component_directory"
  fi

  file_contents="import React from 'react';

/* eslint-disable max-len */
"

  if [ ! -f $component_file ]; then
    # File does not exist. Find all sizes and create file.

    ######################################
    # START ICON COMPONENT FILE CREATION #
    ######################################

    # This grabs the sizes a component exists in, iterates through them, and
    # prints them in the `echo` as the `%` symbol.
    file_contents=$file_contents$(find node_modules/oui-icons/src -regex "node_modules/oui-icons/src/[0-9][0-9]/${file_name}-[0-9][0-9].*\.svg" |
      cut -c28-29 |
      xargs -n1 -I '%' echo "const $component_name% = require('babel?presets[]=react!svg-jsx-loader!svgo-loader!oui-icons/src/%/$file_name-%.svg');")

    file_contents="$file_contents
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const $component_name = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {"

    file_contents=$file_contents$(find node_modules/oui-icons/src -regex "node_modules/oui-icons/src/[0-9][0-9]/${file_name}-[0-9][0-9].*\.svg" |
      cut -c28-29 |
      xargs -n1 -I '%' echo -n "
    case %:
      Svg = $component_name%;
      SizeClass = 'oui-icon--%';
      break;")

    file_contents="$file_contents
    default:
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + SizeClass }
      data-test-section={ props.testSection }
    />
  );
};

$component_name.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf(["

    file_contents=$file_contents$(find node_modules/oui-icons/src -regex "node_modules/oui-icons/src/[0-9][0-9]/${file_name}-[0-9][0-9].*\.svg" |
      cut -c28-29 |
      xargs -n1 -I '%' echo -n "
    %,")

  file_contents="$file_contents
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default $component_name;
"

    ####################################
    # END ICON COMPONENT FILE CREATION #
    ####################################

    # Save the file. Finally.
    echo "Creating file: $component_file"
    echo "$file_contents" > $component_file;

    echo "import $component_name from './$component_name';
export { $component_name };
" >> $ICON_MAIN_FILE
  fi
done;
