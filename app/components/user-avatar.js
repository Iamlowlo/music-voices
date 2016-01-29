import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['user_avatar'],
  actions:{
    signUserOut: function(){
      this.sendAction('signUserOut');
    }
  }
});
