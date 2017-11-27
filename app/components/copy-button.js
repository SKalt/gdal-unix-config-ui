import Component from '@ember/component';

export default Component.extend({
  classNames:['copy-button'],
  click(){
    let input  = document.createElement('textarea');
    // input.style = "display: none;"
    document.querySelector('body').appendChild(input)
    input.value = document.querySelector('pre.script').textContent;

    input.select();
    document.execCommand('copy');
    input.remove()
    input = null;
  }
});
