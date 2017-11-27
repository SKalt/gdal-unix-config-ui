import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
  assert(this.model.inclusionOptions.length > 10, 'inclusion options unloaded');
  assert(this.model.exclusionOptions.length > 10, 'exclusion options unloaded');
});
