`import Resolver from 'ember/resolver'`

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend
  rootElement: "#bridge-points"
  LOG_ACTIVE_GENERATION: true
  LOG_MODULE_RESOLVER: true
  LOG_TRANSITIONS: true
  # LOG_TRANSITIONS_INTERNAL: true
  LOG_VIEW_LOOKUPS: true
  modulePrefix: 'bridge-points' # TODO: loaded via config
  Resolver: Resolver

`export default App`
