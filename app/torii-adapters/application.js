import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  open : function(authorization){
    let userId = authorization.google.id;
    let store = this.get('store');
    return store.findRecord('user', userId ).then(function(user){
        return {currentUser : { name: authorization.google.cachedUserProfile.given_name,
                                picture : authorization.google.cachedUserProfile.picture
                                }
                }
      },function(noUser){
        return false;
      });
  }
});