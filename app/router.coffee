Router = Ember.Router.extend
  rootURL: ENV.baseURL
  location: 'hash'

Router.map ->
  @route("index", path: "/")
  @route("starter", path: "/starter/:id/")

  @route("dummy-index", path: "/dummy")
  @route("dummy", path: "/dummy/:id/:bid")

`export default Router`
