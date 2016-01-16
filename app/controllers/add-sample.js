import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save : function(extraFn){
			let self = this;

			let videoURL = 'https://www.youtube.com/embed/'+this.get('video');
			videoURL = (this.get('videoStart')) ? videoURL+'?start='+this.get('videoStart'):videoURL;

			this.store.createRecord('sample',{
				id: this.get('model.length'),
				name : this.get('name'),
				type : this.get('type'),
				image : this.get('image'),
				video : videoURL,
				comment : (this.get('comment'))?this.get('comment'):''
			}).save().then(function(savedSample){
				//console.log('SAVED',savedSample);
				self.send('reset');
				if (typeof extraFn == 'function') {
					extraFn();
				};
			})
		},
		saveAndGo : function(){
			let self = this;
			let extraFn = function(){
				self.transitionToRoute('index');
			}
			this.send('save', extraFn)
		},
		reset : function(){
			this.set('name','');
			this.set('type','');
			this.set('image','');
			this.set('video','');
			this.set('videoStart','');
			this.set('comment','');
		}
	}
});
