`import Resolver from 'ember/resolver'`
`import loadInitializers from 'ember/load-initializers'`

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend
  rootElement: "#bridge-points"
  modulePrefix: "bridge-points" # TODO: loaded via config
  Resolver: Resolver


loadInitializers(App, 'bridge-points')

`export default App`
