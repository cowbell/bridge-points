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
