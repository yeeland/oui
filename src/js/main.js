// Make jQuery global since we depend on it for all components
import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;

import App from './app/app';

let app = new App();
$(document).ready(() => {
  app.run();
});
