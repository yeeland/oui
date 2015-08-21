/**
 * Core part of component abstraction
 *
 * @author Cheston Lee(cheston@optimizely.com)
 */

const DATA_ATTR = 'oui-component';

export default class BaseController {
  constructor(elem) {
    this.$elem = $(elem);
  }

  bind() {}
  unbind() {}

  static getComponentAttribute() {
    return DATA_ATTR;
  }
  static getFullSelectorString() {}
}
