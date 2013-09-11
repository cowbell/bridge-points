BidView = Ember.View.extend
  tagName: "span"
  templateName: "bid"

  level: (->
    @get("content")[0]
  ).property("content")

  suit: (->
    @get("content")[1..-1]
  ).property("content")

  symbol: (->
    switch @get("suit")
      when "C" then "<span class='suit-c'>♣</span>"
      when "D" then "<span class='suit-d'>♦</span>"
      when "H" then "<span class='suit-h'>♥</span>"
      when "S" then "<span class='suit-s'>♠</span>"
      else
        @get("suit")
  ).property("suit")

`export default BidView`
