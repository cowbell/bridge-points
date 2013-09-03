`import Deal from "appkit/models/deal"`
`import Card from "appkit/models/card"`
`import Utils from "appkit/utils/utils"`

IndexRoute = Ember.Route.extend
  model: ->
    deal = Deal.random()
    Utils.sortCards(deal.n()).map (card) ->
      Card.create(content: card)

`export default IndexRoute`
