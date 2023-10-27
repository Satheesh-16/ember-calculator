import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HistorydisplayRoute extends Route {
  @service history;

  async model() {
    return this.history.calculations;
  }
}
