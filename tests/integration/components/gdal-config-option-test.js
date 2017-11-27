import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gdal-config-option', 'Integration | Component | gdal config option', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gdal-config-option}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gdal-config-option}}
      template block text
    {{/gdal-config-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
