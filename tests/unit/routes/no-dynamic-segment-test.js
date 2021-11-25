import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | no-dynamic-segment', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:no-dynamic-segment');
    assert.ok(route);
  });
});
