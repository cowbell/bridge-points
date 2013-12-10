Router = Ember.Router.extend() # ensure we don't share routes between all Router instances

Router.map ->
  @route("index", path: "/")
  @route("starter", path: "/starter/:id/")

  @route("dummy-index", path: "/dummy")
  @route("dummy", path: "/dummy/:id/:bid")

`export default Router`
