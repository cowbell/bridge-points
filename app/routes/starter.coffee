`import Deal from "bridge-points/models/deal"`
`import Hand from "bridge-points/models/hand"`
`import Utils from "bridge-points/utils/utils"`

StarterRoute = Ember.Route.extend
  setupController: (controller, model) ->
    @._super(controller, model)
    @controllerFor("application").set("activeRouteName", "starter")

  model: (params) ->
    deal = new Deal(params.id, "N", "NONE")
    throw "Invalid deal" unless deal.isValid()
    Hand.create
      id: deal.id.toString()
      cards: Utils.sortCards(deal.n())

  serialize: (model) ->
    id: model.get("id")

`export default StarterRoute`
