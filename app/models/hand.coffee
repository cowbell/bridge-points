`import Card from "appkit/models/card"`

Hand = Ember.Object.extend
  cards: ((key, value) ->
    if arguments.length == 2
      value.map (card) -> Card.create(content: card)
  ).property()

  hcp: (->
    cards = @get("cards")
    cards.filterBy("value", "A").length * 4 +
    cards.filterBy("value", "K").length * 3 +
    cards.filterBy("value", "Q").length * 2 +
    cards.filterBy("value", "J").length
  ).property("cards")

  underrated: (->
    cards = @get("cards")
    cards.filterBy("value", "A").length +
    cards.filterBy("value", "T").length
  ).property("cards")

  overrated: (->
    cards = @get("cards")
    cards.filterBy("value", "Q").length +
    cards.filterBy("value", "J").length
  ).property("cards")

  adjust3: (->
    switch Math.abs(@get("underrated") - @get("overrated"))
      when 0, 1, 2
        0
      when 3, 4, 5
        if @get("underrated") > @get("overrated") then 1 else -1
      else
        if @get("underrated") > @get("overrated") then 2 else -2
  ).property("underrated", "overrated")

  # KQ, KJ, QJ, Qx, Jx, K, Q, and J
  dubious: (->
    cards = @get("cards")
    result = 0
    ["C", "D", "H", "S"].forEach (suit) =>
      cardsInSuit = cards.filterBy("suit", suit).mapBy("value")
      if @isDubiousSingleton(cardsInSuit) or @isDubiousDoubleton(cardsInSuit)
        result -= 1
    result
  ).property("cards")

  isDubiousSingleton: (cards) ->
    return false if cards.length != 1
    cards[0] in ["K", "Q", "J"]

  isDubiousDoubleton: (cards) ->
    return false if cards.length != 2
    _.intersection(cards, ["Q", "J"]).length >= 1

  qualitySuit: (->
    cards = @get("cards")
    result = 0
    ["C", "D", "H", "S"].forEach (suit) ->
      cardsInSuit = cards.filterBy("suit", suit).mapBy("value")
      if cardsInSuit.length >= 4 and _.intersection(cardsInSuit, ["A", "K", "Q", "J", "T"]).length >= 3
        result += 1
    result
  ).property("cards")

  longSuit: (->
    cards = @get("cards")
    result = 0
    ["C", "D", "H", "S"].forEach (suit) ->
      cardsInSuit = cards.filterBy("suit", suit)
      if cardsInSuit.length >= 5
        result += cardsInSuit.length - 4
    result
  ).property("cards")

  starter: (->
    @get("hcp") + @get("adjust3") + @get("dubious") + @get("qualitySuit") + @get("longSuit")
  ).property("hcp", "adjust3", "dubious", "qualitySuit", "longSuit")

`export default Hand`
