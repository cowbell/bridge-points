`import Hand from 'appkit/models/hand'`

module "Models - Hand",
  setup: ->

test "has cards", ->
  cards = ["SA", "HQ", "DA", "DT"]
  hand = Hand.create(cards: cards)
  equal hand.get("cards.length"), 4
  deepEqual hand.get("cards").map((card) -> card.get("content")), cards

test "has hcp", ->
  cards = ["SA", "SK", "S2", "DA", "DJ", "CQ"]
  hand = Hand.create(cards: cards)
  equal hand.get("hcp"), 14

test "has adjust3", ->
  cards = ["SA", "SK", "S2", "HA", "HT", "DA", "DJ", "CQ", "CT"]
  hand = Hand.create(cards: cards)
  equal hand.get("adjust3"), 1

test "has dubious", ->
  cards = ["SK", "SQ", "HK", "DA", "DK", "DQ"]
  hand = Hand.create(cards: cards)
  equal hand.get("dubious"), -2

test "AK dubleton is not treated as dubious", ->
  cards = ["SA", "SK"]
  hand = Hand.create(cards: cards)
  equal hand.get("dubious"), 0

test "Kx dubleton is not treated as dubious", ->
  cards = ["SK", "ST"]
  hand = Hand.create(cards: cards)
  equal hand.get("dubious"), 0

test "has qualitySuit", ->
  cards = ["SK", "SQ", "SJ", "S2", "DA", "DK", "D6"]
  hand = Hand.create(cards: cards)
  equal hand.get("qualitySuit"), 1

test "has longSuit", ->
  cards = ["SK", "SQ", "SJ", "S5", "S4", "S2", "D6"]
  hand = Hand.create(cards: cards)
  equal hand.get("longSuit"), 2
