# Requires bigInt library
# https://github.com/peterolson/BigInteger.js
`import Constants from "appkit/utils/constants"`

Deal = class Deal
  @MAX: bigInt("53644737765488792839237440000")

  @random: ->
    dealer = Constants.DIRECTIONS[Math.floor(Math.random() * 4)]
    vulnerable = Constants.VULNERABILITIES[Math.floor(Math.random() * 4)]
    # TODO: investigate randomness
    until id?.lesserOrEquals(Deal.MAX)
      part = ""
      part += Math.floor(Math.random() * 9) for i in [0..28]
      id = bigInt(part)

    new Deal(id, dealer, vulnerable)

  constructor: (id, dealer, vulnerable) ->
    @id = bigInt(id)
    @dealer = dealer
    @vulnerable = vulnerable

  isValid: ->
    Constants.DIRECTIONS.indexOf(@dealer)? and
    Constants.VULNERABILITIES.indexOf(@vulnerable)? and
    @id?.greaterOrEquals(0) and @id.lesserOrEquals(@constructor.MAX)

  n: ->
    @_n or @dealCards().n
  e: ->
    @_e or @dealCards().e
  s: ->
    @_s or @dealCards().s
  w: ->
    @_w or @dealCards().w

  dealCards: ->
    @_n = []
    @_e = []
    @_s = []
    @_w = []
    k = @constructor.MAX
    id = @id

    Constants.CARDS.forEach (card, i) =>
      x = k.multiply(13 - @_n.length).divide(52 - i)
      if id.lesser(x)
        @_n.push(card)
      else
        id = id.subtract(x)
        x = k.multiply(13 - @_e.length).divide(52 - i)
        if id.lesser(x)
          @_e.push(card)
        else
          id = id.subtract(x)
          x = k.multiply(13 - @_s.length).divide(52 - i)
          if id.lesser(x)
            @_s.push(card)
          else
            id = id.subtract(x)
            x = k.multiply(13 - @_w.length).divide(52 - i)
            @_w.push(card)
      k = x

    n: @_n
    e: @_e
    s: @_s
    w: @_w

`export default Deal`
