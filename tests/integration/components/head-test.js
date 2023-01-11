import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-calculator/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { visit, currentURL } from '@ember/test-helpers';

module('Integration | Component | head', function (hooks) {
  setupRenderingTest(hooks);

  test('checking the element present in history page', async function (assert) {
    await render(hbs`
      <Head>
      </Head>
    `);

    assert.dom(this.element).hasText('Calculator History');
  });

  test('checking rendering in head', async function (assert) {
    assert.expect(2);
    await render(hbs`<Head/>`);

    await click('.nav-hist');
    assert.equal(currentURL(), '/calci/historydisplay');

    await click('.startingpage');
    this.pauseTest();
    assert.strictEqual(currentURL(), '/');
  });
});
