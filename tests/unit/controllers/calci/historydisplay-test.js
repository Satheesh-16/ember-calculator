import { module, test } from 'qunit';
import { setupTest } from 'ember-calculator/tests/helpers';

module('Unit | Controller | calci/historydisplay', function (hooks) {
  setupTest(hooks);

  test('It shows the router actions through controller', function (assert) {
    let controller = this.owner.lookup('controller:calci/historydisplay');
    assert.ok(controller);

    assert.equal(controller.welcome, 'Welcome to the History Page');
  });
});
