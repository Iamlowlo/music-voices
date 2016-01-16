import DS from 'ember-data';

export default DS.Model.extend({
  comment : DS.attr('string'),
  image : DS.attr('string'),
  name : DS.attr('string'),
  type : DS.attr('string'),
  video : DS.attr('string')
});
