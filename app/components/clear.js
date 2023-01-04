import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';



export default class ClearComponent extends Component {
    @service history;

    @action
    clear(){
        this.history.calculations = []
        document.querySelector('#ans').innerHTML = "";
    }

    @action
    refresh(){
        var res = "";
        for(let i=0;i<this.history.calculations.length;i++){
            let x = this.history.calculations[i]["total"]
            let y = this.history.calculations[i]["result"]
            res = res + ` ${x} ==> ${y} `+`<br>`;
        }

        document.querySelector('#ans').innerHTML = res;
    }
}