import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import application from './adapters/application'

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  adapter: application,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
