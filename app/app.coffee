`import Resolver from "resolver"`

App = Ember.Application.create
  # LOG_ACTIVE_GENERATION: true
  # LOG_VIEW_LOOKUPS: true
  modulePrefix: "appkit" # TODO: loaded via config
  Resolver: Resolver

`import routes from "appkit/routes"`
App.Router.map(routes) # TODO: just resolve the router

`export default App`
