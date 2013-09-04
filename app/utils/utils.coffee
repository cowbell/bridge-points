# Returns sorted cards by given trump suit and values from highest to lowest.
#
# examples:
#   sortCards(["C3", "DK" "HA", "ST"], "H") => ["HA", "ST", "DK", "C3"]
#   sortCards(["C3", "DK" "HA", "ST"]) => ["ST", "HA", "C3", "DK"]

sortCards = (cards, trump) =>
  suits = (cards.map (card) -> card[0]).uniq()
  sortedSuits = sortCardSuits(suits, trump)
  sortedValues = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
  # Ember.copy is necessary since sort function modifies array, which is not catched by Ember later on,
  # because all content changes should be done via set function.
  Ember.copy(cards).sort (a, b) ->
    if a[0] == b[0]
      sortedValues.indexOf(a[1]) - sortedValues.indexOf(b[1])
    else
      sortedSuits.indexOf(a[0]) - sortedSuits.indexOf(b[0])

sortCardSuits = (suits, trump) ->
  black = ["S", "C"].filter (s) -> s in suits
  red   = ["H", "D"].filter (s) -> s in suits
  if black.contains(trump)
    black.splice(black.indexOf(trump), 1).concat(red.splice(0, 1), black.splice(0, 1), red.splice(0, 1))
  else if red.contains(trump)
    red.splice(red.indexOf(trump), 1).concat(black.splice(0, 1), red.splice(0, 1), black.splice(0, 1))
  else if black.length >= red.length
    black.splice(0, 1).concat(red.splice(0, 1), black.splice(0, 1), red.splice(0, 1))
  else
    red.splice(0, 1).concat(black.splice(0, 1), red.splice(0, 1), black.splice(0, 1))

Utils =
  sortCards:     sortCards
  sortCardSuits: sortCardSuits

`export default Utils`
