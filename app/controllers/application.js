import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: {
    include: {type: 'array', refreshModel:true, replaceState: true},
    exclude: {type: 'array', refreshModel:true, replaceState: true}
  },
  include:[],
  exclude:[],
  actions:{
    unsetOption(opt){
      if (this.include.indexOf(opt) >= 0){
        this.set('include', this.include.filter(f => f != opt ))
      } else if (this.exclude.indexOf(opt) >= 0){
        this.set('exclude', this.exclude.filter(f => f != opt ))
      }
    },
    includeOption(toAdd){
      this.set('include', [...(new Set([...this.include, toAdd]))].filter(f=>f));
      let exclude = new Set(this.exclude);
      exclude.delete(toAdd);
      console.log(exclude)
      this.set('exclude', [...exclude].filter(f=>f));
    },
    excludeOption(toAdd){
      this.set('exclude', [...(new Set([...this.exclude, toAdd]))].filter(f=>f));
      let include = new Set(this.include);
      include.delete(toAdd);
      this.set('include', [...include].filter(f=>f));
    },
  }
});
