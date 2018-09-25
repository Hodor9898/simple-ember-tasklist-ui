import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  completed: computed('todos.@each.status', function() {
    return this.todos.filter((t) => t.status === 'complete').length;
  }),
  incomplete: computed('completed', function() {
    return this.todos.length - this.completed;
  })
});
