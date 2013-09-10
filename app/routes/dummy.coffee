`import Deal from "appkit/models/deal"`
`import DummyHand from "appkit/models/dummy-hand"`
`import Utils from "appkit/utils/utils"`
`import Constants from "appkit/utils/constants"`

DummyRoute = Ember.Route.extend
  setupController: (controller, model) ->
    @._super(controller, model)
    @controllerFor("application").set("activeRouteName", "dummy")

  model: (params) ->
    deal = new Deal(params.id, "N", "NONE")
    bid = params.auction.toUpperCase()
    throw "Invalid bid" unless bid in Constants.CONTRACTS
    throw "Invalid deal" unless deal.isValid()
    DummyHand.create
      deal: deal
      cards: Utils.sortCards(deal.n())
      auction: bid

  serialize: (model) ->
    id: model.get("id")

`export default DummyRoute`
