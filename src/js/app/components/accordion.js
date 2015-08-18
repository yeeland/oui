/**
 * Directive for simple accordion
 *
 * @author Cheston Lee
 */
import AccordionService from '../services/accordion';

export class Accordion {
  constructor(){
    this.show = true;
    this.service = new AccordionService();
  }

  bind() {
    let $el = $(this.el);

    $el.find('> li > a').on('click', (e) => {
      e.preventDefault();
      this.service.activate(this.el, e.target);
    });
  }
}
