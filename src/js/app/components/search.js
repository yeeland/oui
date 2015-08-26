/**
 * Directive for clearing search inputs with close button.
 *
 * @author Tom Genoni
 * @author Cheston Lee
 */

import BaseController from './base';
import SearchService from '../services/search';

const NAME = 'search';

export default class Search extends BaseController {
  constructor(elem) {
    super(elem);
  }

  bind() {
    this.$elem.find('input').on('keyup', (e) => {
      searchService.activate(this.el, e.target);
    });
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }
}
