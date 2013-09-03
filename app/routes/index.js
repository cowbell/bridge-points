var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'green'];
  }
});

export default IndexRoute;
