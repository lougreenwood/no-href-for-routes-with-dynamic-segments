import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | some-links', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.owner.setupRouter();

    await render(hbs`<SomeLinks />`);
    assert
      .dom('#no-dynamic-segment')
      .hasAttribute(
        'href',
        '/no-dynamic-segment',
        'it renders no dynamic segment href'
      );
    assert
      .dom('#dynamic-segment-no-model')
      .hasAttribute(
        'href',
        '/accounts/undefined',
        'it renders with dynamic segment without model href'
      );
    assert
      .dom('#dynamic-segment-with-model')
      .hasAttribute(
        'href',
        '/accounts/1',
        'it renders with dynamic segment with model href'
      );
  });
});
