import Accordion from './components/accordion';
import Dropdown from './components/dropdown';
import Disclose from './components/disclose';
import Poptip from './components/poptip';

export default class App {
  constructor() {
  }

  run() {
    let accordion = new Accordion();
    accordion.bind();
    let dropdown = new Dropdown();
    dropdown.bind();
    let disclose = new Disclose();
    disclose.bind();
    let poptip = new Poptip();
    poptip.bind();
  }
}
