`import Index from 'appkit/routes/index'`
`import App from 'appkit/app'`

module "Acceptances - Index",
  setup: ->
    App.reset()

test "index renders", ->
  expect(1)

  visit('/').then ->
    ok(exists("a:contains('Bridge Points')"))
