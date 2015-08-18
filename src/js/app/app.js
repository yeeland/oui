import Accordion from './components/accordion';

export default class App {
  constructor() {
  }

  run() {
    var accordion = new Accordion();
    accordion.bind();
  }
}
