import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-calculator/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MainBody />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MainBody>
        template block text
      </MainBody>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
