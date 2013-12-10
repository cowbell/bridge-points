App = null

module "Acceptances - Index",
  setup: ->
    App = startApp()

  teardown: ->
    Ember.run(App, "destroy")

test "index renders", ->
  expect(1)

  visit('/').then ->
    ok(exists("a:contains('Bridge Points')"))
