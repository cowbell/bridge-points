App = null

module "Acceptances - HandRoute",
  setup: ->
    App = startApp()

  teardown: ->
    Ember.run(App, "destroy")


test "displays starter points", ->
  expect(1)

  visit("/starter/7722403834424664271073077873").then ->
    ok(exists(".panel-heading:contains('Starter points: 18')"))
