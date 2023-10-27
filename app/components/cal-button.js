import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

var equ = '';

export default class CalButtonComponent extends Component {
  @service history;

  @tracked total = '';

  @action
  displayer(value) {
    if (value == '÷') {
      this.total += '/';
    } else if (value == 'AC') {
      this.total = '';
    } else if (value == 'C') {
      this.total = this.total.slice(0, -1);
    } else {
      this.total += value;
    }
  }

  @action
  calculate(equation) {
    equation = equation.split(' ').join('');
    equ = equation;
    let stack = [],
      num = '';
    for (let i = 0; i < equation.length; i++) {
      if (this.checker(equation[i])) {
        num += equation[i];
      } else {
        num = parseInt(num);
        stack.push(num, equation[i]);
        num = '';
      }
    }
    stack.push(parseInt(num));
    if (isNaN(stack[0])) {
      stack.splice(0, 1);
    }
    this.calculator(stack);
  }

  checker(num) {
    if (!isNaN(num)) {
      return true;
    }
  }

  calculator(stack) {
    if (stack[0] == '-') {
      stack.splice(0, 1);
      stack[0] *= -1;
      console.log(stack);
    }
    var total_value = stack[0];
    console.log(stack[0]);
    for (let i = 0; i < stack.length; i++) {
      if (isNaN(stack[i])) {
        switch (stack[i]) {
          case '+':
            total_value = total_value + stack[i + 1];
            break;
          case '-':
            total_value = total_value - stack[i + 1];
            break;
          case '/':
            total_value = total_value / stack[i + 1];
            break;
          case '*':
            total_value = total_value * stack[i + 1];
            break;
          case '%':
            total_value = total_value % stack[i + 1];
            break;
          default:
            alert('no such operation');
            break;
        }
      }
    }
    this.total = total_value.toString();
    this.history.addtocal({ total: equ, result: this.total });
  }

  @action
  backup() {
    alert(equ);
  }

  get model() {
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
      ' + ',
    ];
    return cal_value;
  }
}
