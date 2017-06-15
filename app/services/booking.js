import Ember from 'ember';

export default Ember.Service.extend({
  item:[],
  add(item){
    this.get('items').pushObject(item);
  }
});
