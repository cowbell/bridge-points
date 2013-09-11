Routes = ->
  @route("index", path: "/")
  @route("starter", path: "/starter/:id/")

  @route("dummy-index", path: "/dummy")
  @route("dummy", path: "/dummy/:id/:bid")
`export default Routes`
