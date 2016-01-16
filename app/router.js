import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add-sample');
  this.route('sample', { path: '/sample/:id'});
  this.route('edit-sample', { path: '/edit-sample/:id'});
});

export default Router;
