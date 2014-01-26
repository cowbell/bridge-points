`import Deal from "appkit/models/deal"`

DummyIndexRoute = Ember.Route.extend
  redirect: ->
    deal = Deal.random()
    bid = ["1H", "1S"][Math.floor(Math.random() * 2)]
    @transitionTo "/dummy/#{deal.id.toString()}/#{bid}"

`export default DummyIndexRoute`
