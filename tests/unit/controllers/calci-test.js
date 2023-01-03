import { module, test } from 'qunit';
import { setupTest } from 'ember-calculator/tests/helpers';

module('Unit | Controller | calci', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:calci');
    assert.ok(controller);
  });
});
