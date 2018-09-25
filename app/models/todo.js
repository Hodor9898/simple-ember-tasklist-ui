import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr(),
  status: DS.attr(),

  complete: computed('status', function() {
    return this.get('status') === 'complete';
  })
});
