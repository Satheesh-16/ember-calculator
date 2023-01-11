import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-calculator/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-body', function (hooks) {
  setupRenderingTest(hooks);

  test('checking the main body', async function (assert) {
    await render(hbs`
      <MainBody> 
      </MainBody>
    `);

    assert.dom(this.element).hasText('Calculator History');
  });
});
