import BaseComponent from './base';

export default class Tab extends BaseComponent {
  constructor() {
    super();
    this.contentSelector = '[oui-component="tabs"]';
    this.tabSelector = '[oui-component="tabbedContent"]';
  }
  show() {

  }
  init() {
    this.contentElem = $(this.contentSelector);
    this.tabElem = $(this.tabSelector);
  }
}
