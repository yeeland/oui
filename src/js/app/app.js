import Accordion from './components/accordion';
import Dropdown from './components/dropdown';

export default class App {
  constructor() {
  }

  run() {
    var accordion = new Accordion();
    accordion.bind();
    var dropdown = new Dropdown();
    dropdown.bind();
  }
}
