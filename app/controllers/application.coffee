ApplicationController = Ember.ObjectController.extend
  activeRouteName: ""

  isStarterRoute: (->
    @get("activeRouteName") == "starter"
  ).property("activeRouteName")

  isDummyRoute: (->
    @get("activeRouteName") == "dummy"
  ).property("activeRouteName")

`export default ApplicationController`
