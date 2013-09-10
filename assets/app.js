define("appkit/app",
  ["resolver","appkit/routes"],
  function(Resolver, routes) {
    "use strict";
    var BP;

    Ember.LOG_VERSION = false;

    BP = Ember.Application.create({
      rootElement: "#bridge-points",
      modulePrefix: "appkit",
      Resolver: Resolver
    });


    BP.Router.map(routes);


    return BP;
  });
define("appkit/controllers/hand-controller",
  [],
  function() {
    "use strict";
    var HandController;

    HandController = Ember.ObjectController.extend();


    return HandController;
  });
define("appkit/models/card",
  [],
  function() {
    "use strict";
    var Card;

    Card = Ember.Object.extend({
      value: (function() {
        return this.get("content")[1];
      }).property("content"),
      suit: (function() {
        return this.get("content")[0];
      }).property("content"),
      toString: function() {
        return this.get("content");
      }
    });


    return Card;
  });
define("appkit/models/deal",
  ["appkit/utils/constants"],
  function(Constants) {
    "use strict";
    var Deal;

    Deal = Deal = (function() {
      Deal.MAX = bigInt("53644737765488792839237440000");

      Deal.random = function() {
        var dealer, i, id, part, vulnerable, _i;
        dealer = Constants.DIRECTIONS[Math.floor(Math.random() * 4)];
        vulnerable = Constants.VULNERABILITIES[Math.floor(Math.random() * 4)];
        while (!(id != null ? id.lesserOrEquals(Deal.MAX) : void 0)) {
          part = "";
          for (i = _i = 0; _i <= 28; i = ++_i) {
            part += Math.floor(Math.random() * 9);
          }
          id = bigInt(part);
        }
        return new Deal(id, dealer, vulnerable);
      };

      function Deal(id, dealer, vulnerable) {
        this.id = bigInt(id);
        this.dealer = dealer;
        this.vulnerable = vulnerable;
      }

      Deal.prototype.isValid = function() {
        var _ref;
        return (Constants.DIRECTIONS.indexOf(this.dealer) != null) && (Constants.VULNERABILITIES.indexOf(this.vulnerable) != null) && ((_ref = this.id) != null ? _ref.greaterOrEquals(0) : void 0) && this.id.lesserOrEquals(this.constructor.MAX);
      };

      Deal.prototype.n = function() {
        return this._n || this.dealCards().n;
      };

      Deal.prototype.e = function() {
        return this._e || this.dealCards().e;
      };

      Deal.prototype.s = function() {
        return this._s || this.dealCards().s;
      };

      Deal.prototype.w = function() {
        return this._w || this.dealCards().w;
      };

      Deal.prototype.dealCards = function() {
        var id, k,
          _this = this;
        this._n = [];
        this._e = [];
        this._s = [];
        this._w = [];
        k = this.constructor.MAX;
        id = this.id;
        Constants.CARDS.forEach(function(card, i) {
          var x;
          x = k.multiply(13 - _this._n.length).divide(52 - i);
          if (id.lesser(x)) {
            _this._n.push(card);
          } else {
            id = id.subtract(x);
            x = k.multiply(13 - _this._e.length).divide(52 - i);
            if (id.lesser(x)) {
              _this._e.push(card);
            } else {
              id = id.subtract(x);
              x = k.multiply(13 - _this._s.length).divide(52 - i);
              if (id.lesser(x)) {
                _this._s.push(card);
              } else {
                id = id.subtract(x);
                x = k.multiply(13 - _this._w.length).divide(52 - i);
                _this._w.push(card);
              }
            }
          }
          return k = x;
        });
        return {
          n: this._n,
          e: this._e,
          s: this._s,
          w: this._w
        };
      };

      return Deal;

    })();


    return Deal;
  });
define("appkit/models/hand",
  ["appkit/models/card"],
  function(Card) {
    "use strict";
    var Hand;

    Hand = Ember.Object.extend({
      cards: (function(key, value) {
        if (arguments.length === 2) {
          return value.map(function(card) {
            return Card.create({
              content: card
            });
          });
        }
      }).property(),
      hcp: (function() {
        var cards;
        cards = this.get("cards");
        return cards.filterBy("value", "A").length * 4 + cards.filterBy("value", "K").length * 3 + cards.filterBy("value", "Q").length * 2 + cards.filterBy("value", "J").length;
      }).property("cards"),
      underrated: (function() {
        var cards;
        cards = this.get("cards");
        return cards.filterBy("value", "A").length + cards.filterBy("value", "T").length;
      }).property("cards"),
      overrated: (function() {
        var cards;
        cards = this.get("cards");
        return cards.filterBy("value", "Q").length + cards.filterBy("value", "J").length;
      }).property("cards"),
      adjust3: (function() {
        switch (Math.abs(this.get("underrated") - this.get("overrated"))) {
          case 0:
          case 1:
          case 2:
            return 0;
          case 3:
          case 4:
          case 5:
            if (this.get("underrated") > this.get("overrated")) {
              return 1;
            } else {
              return -1;
            }
            break;
          default:
            if (this.get("underrated") > this.get("overrated")) {
              return 2;
            } else {
              return -2;
            }
        }
      }).property("underrated", "overrated"),
      dubious: (function() {
        var cards, result,
          _this = this;
        cards = this.get("cards");
        result = 0;
        ["C", "D", "H", "S"].forEach(function(suit) {
          var cardsInSuit;
          cardsInSuit = cards.filterBy("suit", suit).mapBy("value");
          if (_this.isDubiousSingleton(cardsInSuit) || _this.isDubiousDubleton(cardsInSuit)) {
            return result -= 1;
          }
        });
        return result;
      }).property("cards"),
      isDubiousSingleton: function(cards) {
        var _ref;
        if (cards.length !== 1) {
          return false;
        }
        return (_ref = cards[0]) === "K" || _ref === "Q" || _ref === "J";
      },
      isDubiousDubleton: function(cards) {
        if (cards.length !== 2) {
          return false;
        }
        return _.intersection(cards, ["Q", "J"]).length >= 1;
      },
      qualitySuit: (function() {
        var cards, result;
        cards = this.get("cards");
        result = 0;
        ["C", "D", "H", "S"].forEach(function(suit) {
          var cardsInSuit;
          cardsInSuit = cards.filterBy("suit", suit).mapBy("value");
          if (cardsInSuit.length >= 4 && _.intersection(cardsInSuit, ["A", "K", "Q", "J", "T"]).length >= 3) {
            return result += 1;
          }
        });
        return result;
      }).property("cards"),
      longSuit: (function() {
        var cards, result;
        cards = this.get("cards");
        result = 0;
        ["C", "D", "H", "S"].forEach(function(suit) {
          var cardsInSuit;
          cardsInSuit = cards.filterBy("suit", suit);
          if (cardsInSuit.length >= 5) {
            return result += cardsInSuit.length - 4;
          }
        });
        return result;
      }).property("cards"),
      starter: (function() {
        return this.get("hcp") + this.get("adjust3") + this.get("dubious") + this.get("qualitySuit") + this.get("longSuit");
      }).property("hcp", "adjust3", "dubious", "qualitySuit", "longSuit")
    });


    return Hand;
  });
define("appkit/routes",
  [],
  function() {
    "use strict";
    var Routes;

    Routes = function() {
      return this.route("hand", {
        path: "/hands/:id/"
      });
    };


    return Routes;
  });
define("appkit/routes/hand",
  ["appkit/models/deal","appkit/models/hand","appkit/utils/utils"],
  function(Deal, Hand, Utils) {
    "use strict";
    var HandRoute;

    HandRoute = Ember.Route.extend({
      model: function(params) {
        var deal;
        deal = new Deal(params.id, "N", "NONE");
        if (!deal.isValid()) {
          throw "Invalid deal";
        }
        return Hand.create({
          id: deal.id.toString(),
          cards: Utils.sortCards(deal.n())
        });
      },
      serialize: function(model) {
        return {
          id: model.get("id")
        };
      }
    });


    return HandRoute;
  });
define("appkit/routes/index",
  ["appkit/models/deal"],
  function(Deal) {
    "use strict";
    var IndexRoute;

    IndexRoute = Ember.Route.extend({
      redirect: function() {
        var deal;
        deal = Deal.random();
        return this.transitionTo("/hands/" + (deal.id.toString()));
      }
    });


    return IndexRoute;
  });
define("appkit/utils/constants",
  [],
  function() {
    "use strict";
    var Constants;

    Constants = {};

    Constants.CONTRACTS = ["1C", "1D", "1H", "1S", "1NT", "2C", "2D", "2H", "2S", "2NT", "3C", "3D", "3H", "3S", "3NT", "4C", "4D", "4H", "4S", "4NT", "5C", "5D", "5H", "5S", "5NT", "6C", "6D", "6H", "6S", "6NT", "7C", "7D", "7H", "7S", "7NT"];

    Constants.PASS = "PASS";

    Constants.DOUBLE = "X";

    Constants.REDOUBLE = "XX";

    Constants.MODIFIERS = [Constants.DOUBLE, Constants.REDOUBLE];

    Constants.BIDS = Constants.CONTRACTS.concat(Constants.MODIFIERS, [Constants.PASS]);

    Constants.CARDS = ["C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK", "CA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK", "DA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK", "HA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK", "SA"];

    Constants.DIRECTIONS = ["N", "E", "S", "W"];

    Constants.VULNERABILITIES = ["NONE", "NS", "EW", "BOTH"];

    Constants.SUITS = ["C", "D", "H", "S"];

    Constants.TRUMPS = Constants.SUITS.concat("NT");

    Constants.SIDES = ["NS", "EW"];


    return Constants;
  });
define("appkit/utils/utils",
  [],
  function() {
    "use strict";
    var Utils, sortCardSuits, sortCards,
      _this = this,
      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    sortCards = function(cards, trump) {
      var sortedSuits, sortedValues, suits;
      suits = (cards.map(function(card) {
        return card[0];
      })).uniq();
      sortedSuits = sortCardSuits(suits, trump);
      sortedValues = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
      return Ember.copy(cards).sort(function(a, b) {
        if (a[0] === b[0]) {
          return sortedValues.indexOf(a[1]) - sortedValues.indexOf(b[1]);
        } else {
          return sortedSuits.indexOf(a[0]) - sortedSuits.indexOf(b[0]);
        }
      });
    };

    sortCardSuits = function(suits, trump) {
      var black, red;
      black = ["S", "C"].filter(function(s) {
        return __indexOf.call(suits, s) >= 0;
      });
      red = ["H", "D"].filter(function(s) {
        return __indexOf.call(suits, s) >= 0;
      });
      if (black.contains(trump)) {
        return black.splice(black.indexOf(trump), 1).concat(red.splice(0, 1), black.splice(0, 1), red.splice(0, 1));
      } else if (red.contains(trump)) {
        return red.splice(red.indexOf(trump), 1).concat(black.splice(0, 1), red.splice(0, 1), black.splice(0, 1));
      } else if (black.length >= red.length) {
        return black.splice(0, 1).concat(red.splice(0, 1), black.splice(0, 1), red.splice(0, 1));
      } else {
        return red.splice(0, 1).concat(black.splice(0, 1), red.splice(0, 1), black.splice(0, 1));
      }
    };

    Utils = {
      sortCards: sortCards,
      sortCardSuits: sortCardSuits
    };


    return Utils;
  });
define("appkit/views/card-view",
  [],
  function() {
    "use strict";
    var CardView;

    CardView = Ember.View.extend({
      classNames: ["card"],
      classNameBindings: ["isDisabled:disabled", "suitClassName"],
      templateName: (function() {
        var name;
        name = this.get("card.value") ? this.get("card.value").toLowerCase() : "unknown";
        return "cards/" + name;
      }).property("card.value"),
      suitClassName: (function() {
        if (this.get("card.suit")) {
          return "suit-" + (this.get("card.suit").toLowerCase());
        }
      }).property("card.suit"),
      isDisabled: true
    });


    return CardView;
  });
define("appkit/views/popover-view",
  [],
  function() {
    "use strict";
    var PopoverView;

    PopoverView = Ember.View.extend({
      tagName: "span",
      classNames: ["description"],
      didInsertElement: function() {
        return this.$("button").popover();
      }
    });


    return PopoverView;
  });
//@ sourceMappingURL=app.js.map