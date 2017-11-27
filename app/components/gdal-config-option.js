import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName:'pre',
  classNames:['option'],
  attributeBindings:['title'],
  title:'Remove this option',
  click(){
    this.get('removeSelf')(this.option);
  }

});
