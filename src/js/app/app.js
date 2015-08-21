import Accordion from './components/accordion';
import Dropdown from './components/dropdown';
import Disclose from './components/disclose';
import Poptip from './components/poptip';

export default class App {
  constructor() {
  }

  run() {
    let components = [];
    components.push(Accordion);
    components.push(Disclose);
    components.push(Dropdown);
    components.push(Poptip);

    this.bindComponents(components);
  }

  bindComponents(components) {
    components.forEach((Component) => {
      let refs = $(Component.getFullSelectorString());
      refs.each(function() {
        let comp = new Component(this);
        comp.bind();
      });
    });
  }
}
