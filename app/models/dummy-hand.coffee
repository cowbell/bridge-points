`import Card from "appkit/models/card"`
`import Hand from "appkit/models/hand"`

DummyHand = Ember.Object.extend
  hand: (->
    Hand.create
      id: @get("deal").id.toString()
      cards: @get("cards")
  ).property("deal", "cards.@each")

  dummy: (->
  ).property("hand")

  shortSuits: (->
  ).property("cards.@each")

`export default DummyHand`
