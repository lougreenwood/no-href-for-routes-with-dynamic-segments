import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | with-dynamic-segment', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:with-dynamic-segment');
    assert.ok(route);
  });
});
