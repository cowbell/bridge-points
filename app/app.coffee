`import Resolver from "resolver"`

Ember.LOG_VERSION = false

BP = Ember.Application.create
  rootElement: "#bridge-points"
  modulePrefix: "appkit" # TODO: loaded via config
  Resolver: Resolver
  LOG_ACTIVE_GENERATION: true
  LOG_VIEW_LOOKUPS: true
  LOG_TRANSITIONS: true

`import routes from "appkit/routes"`
BP.Router.map(routes) # TODO: just resolve the router

`export default BP`
