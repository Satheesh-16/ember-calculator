import EmberRouter from '@ember/routing/router';
import config from 'ember-calculator/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('calci', function () {
    this.route('historydisplay');
  });
  this.route('form');
});
