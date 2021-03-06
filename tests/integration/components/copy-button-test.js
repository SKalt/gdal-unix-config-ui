import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('copy-button', 'Integration | Component | copy button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{copy-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#copy-button}}
      template block text
    {{/copy-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

// test('it copies the generated script', function(assert){
//
// })