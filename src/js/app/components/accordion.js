/**
 * Directive for simple accordion
 *
 * @author Cheston Lee
 */
import AccordionService from '../services/accordion';
import BaseController from './base';

const NAME = 'accordion';

export default class Accordion extends BaseController {
  constructor(elem){
    super(elem);
    this.service = new AccordionService();
  }

  static getFullSelectorString() {
    return `[${this.getComponentAttribute()}=${NAME}]`;
  }

  bind() {
    this.$elem.find('> li > a').on('click', (e) => {
      e.preventDefault();
      this.service.activate(this.$elem, e.target);
    });
  }
}
