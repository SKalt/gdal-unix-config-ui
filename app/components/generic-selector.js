import Component from '@ember/component';

export default Component.extend({
  actions:{
    select(event){
      this.get('onSelect')(event.target.value);
      event.target.value = '';
    }
  }
});
