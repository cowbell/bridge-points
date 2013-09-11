`import App from 'appkit/app'`

module "Acceptances - HandRoute",
  setup: ->
    App.reset()

test "displays starter points", ->
  expect(1)

  visit("/starter/7722403834424664271073077873").then ->
    ok(exists(".panel-heading:contains('Starter points: 18')"))
