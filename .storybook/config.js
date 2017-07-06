import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  // goFullScreen: false,
  showLeftPanel: true,
  // showDownPanel: false,
  // showSearchBox: false,
  downPanelInRight: true,
  // sortStoriesByKind: false,
});

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);