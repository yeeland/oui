/* eslint-disable no-console */
'use strict';

const del = require('del');
const glob = require('glob');
const fs = require('fs');

const generate = require('./generateFileText.js');

const ICON_SRC_DIRECTORY = 'src/components/Icon';
const ICON_SRC_INDEX = `${ICON_SRC_DIRECTORY}/index.js`;
const OUI_ICONS_SRC = 'node_modules/oui-icons/src';

console.log('Generating `oui-icon` components...');

// Clean the icons directory
console.log('Deleting exsiting icon components...');
del.sync(`${ICON_SRC_DIRECTORY}/*/`);
del.sync(ICON_SRC_INDEX);

// Loop through the icons from `oui-icons`
glob(`${OUI_ICONS_SRC}/+([0-9])/*`, (err, files) => {
  let icons = {};

  files.map((file, index) => {
    const pathArray = file.split('/');
    const fileName = pathArray[pathArray.length - 1];
    const fileNameRegex = fileName.match(/(.*)-(\d\d)/);
    const iconName = fileNameRegex[1];
    const iconSize = fileNameRegex[2];

    if (!icons[iconName]) {
      icons[iconName] = {
        // Take string like `variation-settings` and convert to
        // `VariationSettings`.
        titleCase: iconName.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }).replace(/ /g, ''),
        sizes: [],
      };
    }

    icons[iconName].sizes.push(iconSize);
  });

  let iconComponentNames = [];

  for (let iconName in icons) {
    if ({}.hasOwnProperty.call(icons, iconName)) {
      const fileText = generate.generateFileText(iconName, icons[iconName].titleCase, icons[iconName].sizes);
      const componentFilePath = `${ICON_SRC_DIRECTORY}/${icons[iconName].titleCase}Icon`;

      fs.mkdirSync(componentFilePath);
      fs.writeFileSync(`${componentFilePath}/index.js`, fileText);
      console.log(`Created \`${componentFilePath}/index.js\``);

      iconComponentNames.push(icons[iconName].titleCase);
    }
  }

  const iconIndexFileText = generate.generateIndexFileText(iconComponentNames);
  fs.writeFileSync(ICON_SRC_INDEX, iconIndexFileText);
  console.log(`Created \`${ICON_SRC_INDEX}\``);
});
