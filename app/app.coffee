`import Resolver from "resolver"`

Ember.LOG_VERSION = false

BP = Ember.Application.create
  rootElement: "#bridge-points"
  modulePrefix: "appkit" # TODO: loaded via config
  Resolver: Resolver

`import routes from "appkit/routes"`
BP.Router.map(routes) # TODO: just resolve the router

`export default BP`
