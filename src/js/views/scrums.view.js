var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('../templates/scrums.template.hbs');
var ScrumView = require('./scrum.view.js');
var ScrumCollection = require('../collections/scrum.collection.js');
var scrums = require('../scrums.js');

Backbone.$ = $;

var ScrumsView = Backbone.View.extend({
  tagName: 'ul',
  className: 'scrum-list',
  template: template,

  initialize: function() {
    this.collection = new ScrumCollection(scrums);

    _.bindAll(this, 'on_keypress');
    $(document).bind('keydown', this.on_keypress);
  },

  render: function() {
    this.$el.html(template());
    this.collection.each(function(scrum) {
      var scrumView = new ScrumView({ model: scrum });
      this.$el.prepend(scrumView.render().el);
    }, this);
    return this;
  },

  on_keypress: function(e) {

    var code = e.keyCode || e.which;
    var rand = Math.floor(Math.random() * this.collection.length);
    var self = this;
    if (code === 32) {
      this.$el.find('li').hide();
      this.$el.find('li').eq(rand).fadeIn(300);
    }
  }
});

module.exports = ScrumsView;
