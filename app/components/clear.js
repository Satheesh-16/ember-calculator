import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ClearComponent extends Component {
  @service history;

  @action
  clear() {
    this.history.calculations = [];
    document.querySelector('#ans').innerHTML = 'History Cleared';
  }

  @action
  refresh() {
    document.querySelector('#ans').innerHTML = '';

    if (this.history.calculations.length == 0) {
      document.querySelector('#ans').innerHTML = '0 ==> 0';
    } else {
      var res = ``;
      for (let i = 0; i < this.history.calculations.length; i++) {
        let x = this.history.calculations[i]['total'];
        let y = this.history.calculations[i]['result'];
        res = res + ` <br>${x} ==> ${y} ` + `<br>`;
      }
      document.querySelector('#ans').innerHTML = res;
    }
  }
}
