import { module, test } from 'qunit';
import { setupTest } from 'ember-calculator/tests/helpers';

module('Unit | Route | calci', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:calci');
    assert.ok(route);
  });
});
