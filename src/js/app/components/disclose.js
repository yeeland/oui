/**
 * Directive for simple disclosures
 *
 * @author Tom Genoni
 * @author Cheston Lee(cheston@optimizely.com)
 */
import BaseController from './base';

const NAME = 'disclose';
const ACTIVE_DISCLOSE_CLASS = 'lego-disclose__item--active';
const PARENT_DISCLOSE_SELECTOR = '.lego-disclose__item';

export default class Disclose extends BaseController {
  constructor(elem) {
    super(elem);
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }

  bind() {
    this.$elem.find('> a').on('click', (e) => {
      e.preventDefault();
      this._discloseActivate(e.target);
    });
  }

  _discloseActivate(target) {
    let $target = $(target);
    let contentPane = $target.parent(PARENT_DISCLOSE_SELECTOR);

    if (contentPane.hasClass(ACTIVE_DISCLOSE_CLASS) ) {
      contentPane.removeClass(ACTIVE_DISCLOSE_CLASS);
    } else {
      contentPane.addClass(ACTIVE_DISCLOSE_CLASS);
    }
  }
}
