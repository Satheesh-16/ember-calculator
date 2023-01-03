import Controller from '@ember/controller';

export default class CalciController extends Controller {
  get keys() {
    const cal_value = [
      '%',
      '00',
      'AC',
      'C',
      '7',
      '8',
      '9',
      '÷',
      '4',
      '5',
      '6',
      ' * ',
      '1',
      '2',
      '3',
      ' - ',
      '0',
      '.',
      ' + ',
      '=',
    ];
    return cal_value;
  }
}
