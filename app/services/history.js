import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HistoryService extends Service {
  @tracked calculations = [];

  @action
  addtocal(cals) {
    //cals = calculations bind by result
    this.calculations = [...this.calculations, cals];
    console.log(this.calculations);
  }
}
