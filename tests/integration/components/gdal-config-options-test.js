import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gdal-config-options', 'Integration | Component | gdal config options', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gdal-config-options}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gdal-config-options}}
      template block text
    {{/gdal-config-options}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
