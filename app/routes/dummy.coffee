`import Deal from "bridge-points/models/deal"`
`import DummyHand from "bridge-points/models/dummy-hand"`
`import Utils from "bridge-points/utils/utils"`
`import Constants from "bridge-points/utils/constants"`

DummyRoute = Ember.Route.extend
  setupController: (controller, model) ->
    @._super(controller, model)
    @controllerFor("application").set("activeRouteName", "dummy")

  model: (params) ->
    deal = new Deal(params.id, "N", "NONE")
    bid = params.bid.toUpperCase()
    throw "Invalid bid" unless bid in Constants.CONTRACTS
    throw "Invalid deal" unless deal.isValid()

    DummyHand.create
      id: deal.id.toString()
      cards: Utils.sortCards(deal.n())
      bid: bid

  serialize: (model) ->
    id: model.get("id")
    bid: model.get("bid")

`export default DummyRoute`
