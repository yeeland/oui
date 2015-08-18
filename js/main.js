// Make jQuery global since we depend on it everywhere
import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;

import {Tab} from './tabs';
Tab.bind();
