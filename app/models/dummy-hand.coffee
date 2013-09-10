`import Card from "appkit/models/card"`
`import Hand from "appkit/models/hand"`

DummyHand = Ember.Object.extend
  hand: (->
    Hand.create
      id: @get("deal").id.toString()
      cards: @get("cards")
  ).property("deal", "cards.@each")

  dummy: (->
    @get("hand.starter") + @get("shortSuits")
  ).property("hand", "shortSuits")

  shortSuits: (->
    0
  ).property("cards.@each")

`export default DummyHand`
