`import Deal from "appkit/models/deal"`

DummyIndexRoute = Ember.Route.extend
  redirect: ->
    deal = Deal.random()
    @transitionTo "/dummy/#{deal.id.toString()}"

`export default DummyIndexRoute`
