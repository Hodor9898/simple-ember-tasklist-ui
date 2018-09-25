import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return  this.store.findAll('todo')
      .catch((err) => {
        window.alert('אופס, יש איזה בעיה עם השרת')
      })
  }
});
