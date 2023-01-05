import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class HistorydisplayController extends Controller {
    welcome = "this is history page";
    @service history;
    @action
    demo(){
        alert("hello");
    }
}