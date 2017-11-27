import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName:'pre',
  classNames:['script'],
  anyOptions: computed('excluded', 'included', function(){
    alert(this.get('included'));
    return [].concat(this.get('included'), this.get('excluded'))
      .filter(e=>e)
      .length;
  }),
  actions:{
    remove(...args){
      this.get('remove')(...args);
    }
  }
});
