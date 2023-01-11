import { module, test } from 'qunit';
import { setupTest } from 'ember-calculator/tests/helpers';

module('Unit | Service | history', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:history');
    assert.ok(service);

    let x = { total: '4*5', result: 20 };
    service.addtocal(x);
    assert.equal(service.calculations[0], x);
  });
});
