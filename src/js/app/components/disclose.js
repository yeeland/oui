/**
 * Directive for simple disclosures
 *
 * @author Tom Genoni
 * @author Cheston Lee(cheston@optimizely.com)
 */
import BaseController from './base';

export default class Disclose extends BaseController {
  constructor() {
    super();
    this.ACTIVE_DISCLOSE_CLASS = 'lego-disclose__item--active';
    this.selector = 'disclose';
  }

  bind() {
    let $el = $(`[${this.attribute}=${this.selector}]`);
    $el.find('> a').on('click', (e) => {
      e.preventDefault();
      this._discloseActivate($el, e.target);
    });
  }

  _discloseActivate($el, target) {
    let $target = $(target);

    let contentPane = $target.parent('.lego-disclose__item');

    if ( contentPane.hasClass(this.ACTIVE_DISCLOSE_CLASS) ) {
      contentPane.removeClass(this.ACTIVE_DISCLOSE_CLASS);
    } else {
      contentPane.addClass(this.ACTIVE_DISCLOSE_CLASS);
    }
  }
}
