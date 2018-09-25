import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  actions: {
    addTodo() {
      let result = window.prompt("הוסף משימה", "לא ידוע");

      let store = this.get('targetObject.store');

      let todo = store.createRecord('todo', {
        title: result,
        status: 'incomplete'
      });

      todo.save().catch((err) => {
        window.alert('אופס, יש איזה בעיה עם השרת')
      })
    }
  }
});
