Card = Ember.Object.extend
  value: (-> @get("content")[1]).property("content")
  suit: (-> @get("content")[0]).property("content")

  toString: -> @get("content")

`export default Card`
