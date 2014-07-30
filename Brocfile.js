/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use this to add additional libraries to the generated output files.
app.import('vendor/BigInteger/BigInteger.min.js');
app.import('vendor/underscore/underscore.js');
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.

module.exports = app.toTree();
