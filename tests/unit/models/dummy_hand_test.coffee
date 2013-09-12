`import DummyHand from 'appkit/models/dummy-hand'`

module "Models - DummyHand",
  setup: ->

test "has shortSuits", ->
  cards = ["HQ", "H8", "H5", "H4", "CK", "C7", "C6", "C4", "C3", "DT", "D8", "D5", "D4"]
  dummyHand = DummyHand.create
    id: "13800264025813182845633631181"
    cards: cards
    bid: "1H"

  equal dummyHand.get("shortSuits"), 4

test "shortSuits is 0 when no fit", ->
  cards = ["ST", "S7", "H9", "H7", "CK", "C8", "C7", "C6", "C3", "DJ", "D9", "D8", "D3"]
  dummyHand = DummyHand.create
    id: "28733624042556880727025626481"
    cards: cards
    bid: "1S"

  equal dummyHand.get("shortSuits"), 0
