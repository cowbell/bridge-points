`import Deal from "appkit/models/deal"`

IndexRoute = Ember.Route.extend
  redirect: ->
    deal = Deal.random()
    @transitionTo "/hands/#{deal.id.toString()}"

`export default IndexRoute`
