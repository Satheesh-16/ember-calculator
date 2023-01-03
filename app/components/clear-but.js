import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';




export default class CalButtonComponent extends Component {
  @service history;

@tracked equa = [];

  
  @action
  clear() {
    this.history.calculations = [];
    this.equa = []
  }
 

  @action
  load(){
    this.equa = [...this.history.calculations];
  }
}
