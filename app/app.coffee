`import Resolver from "resolver"`

Ember.LOG_VERSION = false

BP = Ember.Application.create
  rootElement: "#bridge-points"
  # LOG_ACTIVE_GENERATION: true
  # LOG_VIEW_LOOKUPS: true
  modulePrefix: "appkit" # TODO: loaded via config
  Resolver: Resolver

`import routes from "appkit/routes"`
BP.Router.map(routes) # TODO: just resolve the router

`import deal from "appkit/models/deal"`
`import card from "appkit/models/card"`
BP.Deal = deal
BP.Card = card

`export default BP`
