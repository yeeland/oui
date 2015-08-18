/**
 * Directive for simple accordion
 *
 * @author Cheston Lee
 */
import AccordionService from '../services/accordion';
import BaseController from './base';

export default class Accordion extends BaseController {
  constructor(){
    super();
    this.selector = 'accordion';
    this.service = new AccordionService();
  }

  bind() {
    let $el = $(`[${this.attribute}=${this.selector}]`);

    $el.find('> li > a').on('click', (e) => {
      e.preventDefault();
      this.service.activate($el, e.target);
    });
  }
}
