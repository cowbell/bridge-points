`import Ember from 'ember'`

Router = Ember.Router.extend
  location: BridgePointsENV.locationType

Router.map ->
  @route("index", path: "/")
  @route("starter", path: "/starter/:id/")

  @route("dummy-index", path: "/dummy")
  @route("dummy", path: "/dummy/:id/:bid")

`export default Router`
