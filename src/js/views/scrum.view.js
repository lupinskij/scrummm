var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/scrum.template.hbs');

Backbone.$ = $;

var ScrumView = Backbone.View.extend({
  tagName: 'li',
  className: 'scrum-single',
  template: template,

  render: function() {
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
});

module.exports = ScrumView;