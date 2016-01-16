import Ember from 'ember';

export default Ember.Controller.extend({
	video : Ember.computed(function(){
		let video = this.get('model.video');
		let idStart = 'https://www.youtube.com/embed/'.length;
		let idEnd = video.indexOf('?');

		idEnd = (idEnd<0) ? video.length : idEnd-idStart;
		return video.substr(idStart,idEnd);
	}),
	videoStart : Ember.computed(function(){
		let video = this.get('model.video');
		let timeStart = video.indexOf('start=');
		let videoStart = (timeStart<0) ? '' : video.substr(timeStart+'start='.length);
		
		return videoStart;
	}),
	actions: {
		save : function(extraFn){
			let self = this;

			let videoURL = 'https://www.youtube.com/embed/'+this.get('video');
			videoURL = (this.get('videoStart')) ? videoURL+'?start='+this.get('videoStart'):videoURL;
			this.set('model.video',videoURL);
			this.set('model.comment',(this.get('model.comment'))?this.get('model.comment'):'');
			this.get('model').save().then(function(savedSample){
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
			this.get('model').rollbackAttributes();
		}
	}
});
