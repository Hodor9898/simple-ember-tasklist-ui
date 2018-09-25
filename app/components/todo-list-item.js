import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    toggle(todo) {
      let newStatus = todo.complete ? 'incomplete' : 'complete';

      todo.set('status', newStatus);
      todo.save();
    },
    destroy(todo) {
      todo.destroyRecord();
    }
  }
});
