import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function(errorLogin) {
      //Actions to take if the session is not created
      console.log('errorLogin ',errorLogin);
    });
  },
  actions:{
    signIn: function(provider){
      let self = this;
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data);
      });
    },
    signOut: function(){
      this.get('session').close();
    }
  }
});
