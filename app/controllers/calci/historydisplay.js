import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HistorydisplayController extends Controller {
  @service history;
  @service router;

  welcome = 'Welcome to the History Page';

  @action
  greet() {
    alert(this.welcome);
  }

  @action
  transs() {
    this.router.transitionTo('index');
  }
}
