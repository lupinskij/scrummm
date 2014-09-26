var $ = require('jquery');
var Backbone = require('backbone');
var ScrumsView = require('./views/scrums.view.js');
var ScrumCollection = require('./collections/scrum.collection.js');

var Router = Backbone.Router.extend({
  routes: {
    '*path': 'default'
  },

  initialize: function() {
    Backbone.history.start();
  },

  default: function() {
    console.log('default');
    var scrumsView = new ScrumsView();
    $('.cell').html(scrumsView.render().el);
  }
});

module.exports = Router;
