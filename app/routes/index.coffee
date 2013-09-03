`import Deal from "appkit/models/deal"`
`import Card from "appkit/models/card"`

IndexRoute = Ember.Route.extend
  model: ->
    deal = Deal.random()
    deal.n().map (card) ->
      Card.create(content: card)

`export default IndexRoute`
