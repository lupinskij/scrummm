var $ = require('jquery');
var Backbone = require('backbone');
var ScrumModel = require('../models/scrum.model.js');

var ScrumCollection = Backbone.Collection.extend({
  model: ScrumModel
});

module.exports = ScrumCollection;