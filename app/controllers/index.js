import Ember from 'ember';

export default Ember.Controller.extend({
	isEditionMode : false,
	actions : {
		toggleEditionMode : function(){
			this.toggleProperty('isEditionMode');
		}
	}
});
