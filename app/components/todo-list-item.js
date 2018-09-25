import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    toggle(todo) {
      let newStatus = todo.complete ? 'incomplete' : 'complete';

      todo.set('status', newStatus);
      todo.save()
        .catch((err) => {
          window.alert('אופס, יש איזה בעיה עם השרת')
        })
    },
    destroy(todo) {
      todo.destroyRecord().catch((err) => {
        window.alert('אופס, יש איזה בעיה עם השרת')
      })
    }
  }
});
