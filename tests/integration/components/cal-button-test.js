import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-calculator/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cal-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);
    await render(hbs`<CalButton></CalButton>`);

    await click(this.element);

    assert
      .dom(this.element)
      .hasText('% 00 AC C 7 8 9 ÷ 4 5 6 * 1 2 3 - 0 + Q =');

    assert.dom('input').hasAttribute('type', 'text');
  });
});
