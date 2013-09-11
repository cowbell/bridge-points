`import Card from "appkit/models/card"`
`import Hand from "appkit/models/hand"`
`import Constants from "appkit/utils/constants"`

DummyHand = Ember.Object.extend
  bid: Ember.computed.alias("auction")

  hand: (->
    Hand.create
      id: @get("deal").id.toString()
      cards: @get("cards")
  ).property("deal", "cards.@each")

  trump: (->
    suit = @get("bid")[1..-1]
    if suit == "NT" then null else suit
  ).property("bid")

  trumpCards: (->
    @get("hand.cards").filterBy("suit", @get("trump"))
  ).property("trump", "hand.cards.@each")

  dummy: (->
    @get("hand.starter") + @get("shortSuits")
  ).property("hand", "shortSuits")

  shortSuits: (->
    return 0 if @get("trumpCards.length") == 0
    result = 0
    Constants.SUITS.without(@get("trump")).forEach (suit) =>
      cardsInSuit = @get("hand.cards").filterBy("suit", suit)
      result += switch cardsInSuit.get("length")
        when 0 then @get("trumpCards.length")
        when 1
          if @get("trumpCards.length") >= 4 then 3 else 2
        when 2 then 1
        else
          0
    result
  ).property("hand.cards.@each", "trump")

`export default DummyHand`
