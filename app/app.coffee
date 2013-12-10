`import Resolver from "resolver"`

Ember.LOG_VERSION = false

BP = Ember.Application.extend
  rootElement: "#bridge-points"
  modulePrefix: "appkit" # TODO: loaded via config
  Resolver: Resolver["default"]
  # LOG_ACTIVE_GENERATION: true
  # LOG_VIEW_LOOKUPS: true
  # LOG_TRANSITIONS: true

Ember.RSVP.configure "onerror", (error) ->
  # ensure unhandled promises raise awareness.
  # may result in false negatives, but visibility is more important
  if error instanceof Error
    Ember.Logger.assert(false, error)
    Ember.Logger.error(error.stack)

`export default BP`
