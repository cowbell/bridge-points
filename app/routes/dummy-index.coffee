`import Deal from "appkit/models/deal"`

WtfIndexRoute = Ember.Route.extend
  redirect: ->
    deal = Deal.random()
    @transitionTo "/dummy/#{deal.id.toString()}/1S"

`export default WtfIndexRoute`
