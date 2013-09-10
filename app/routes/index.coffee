`import Deal from "appkit/models/deal"`

IndexRoute = Ember.Route.extend
  redirect: ->
    deal = Deal.random()
    @transitionTo "/starter/#{deal.id.toString()}"

`export default IndexRoute`
