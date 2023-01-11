import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-calculator/tests/helpers';
import { click } from '@ember/test-helpers';

module('Acceptance | route practise', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /route-practise', async function (assert) {
    assert.expect(4);
    await visit('/');
    assert.dom('.start-link').exists();

    await click('.start-link');
    assert.equal(currentURL(), '/calci');

    await click('.nav-hist');
    assert.equal(currentURL(), '/calci/historydisplay');

    await click('.startingpage');
    assert.equal(currentURL(), '/');
  });

  test('checking image loading', async function (assert) {
    await visit('/');
    assert.dom('#home-image').hasAttribute('src', '/Images/calculators.png');

    assert.dom('.start-link').hasText('Start Calculating...');
  });
});
