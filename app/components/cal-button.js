import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';



export default class CalButtonComponent extends Component {
  @service history;

  @tracked total = '';

  @action
  nice(value) {
    if (value == '÷') {
      this.total += '/';
    } 
    else if (value == '=') {
      let result = eval(this.total);
      const cal = { "total": this.total, "result":result };
      this.history.addtocal(cal);
      this.total = result;
    } 
    else if (value == 'AC') {
      this.total = '';
    } 
    else if (value == 'C') {
      this.total = this.total.slice(0, -1);
    } 
    else {
      this.total += value;
    }
  }

  get model(){
    const cal_value = ['%','00','AC','C','7','8','9','÷','4','5','6',' * ','1','2','3',' - ','0','.',' + ','=' ];
    return cal_value;
  }
}
