import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-calculator/tests/helpers';
import { click, currentURL, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | clear', function (hooks) {
  setupRenderingTest(hooks);

  test('checking the history display component', async function (assert) {
    await render(hbs`<Clear />`);
    assert.dom(this.element).hasText('Clear History refresh');

    await click('.clearhist');
    assert.equal(
      this.element.querySelector('#ans').textContent.trim(),
      'History Cleared'
    );
  });
});
