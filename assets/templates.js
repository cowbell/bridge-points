Ember.TEMPLATES["adjust3-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<ol>\n  <li>Count your underrated honors: number of Aces and Tens</li>\n  <li>Count your overrated honors: number of Jacks and Queens (Kings are excluded)</li>\n  <li>Subtract the smaller from the larger</li>\n  <li>Consider the difference: If the value is 0-2, no adjustment is required. If the value is 3-5 adjust by 1. If the value is 6+ (rare), adjust by 2</li>\n  <li> If you have more underrated honors your adjustment is positive add 0, 1 or 2 points. If the overrated honors are more, you adjust by subtracting the difference (0, 1, or 2)</li>\n</ol>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Bridge Points</a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["cards/2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-two\">\n  <div class=\"corner top\"><span class=\"number\">2</span><span class=\"symbol\"></span></div><span class=\"suit top_center symbol\"></span><span class=\"suit bottom_center symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">2</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/3"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-three\">\n  <div class=\"corner top\"><span class=\"number\">3</span><span class=\"symbol\"></span></div><span class=\"suit top_center symbol\"></span><span class=\"suit middle_center symbol\"></span><span class=\"suit bottom_center symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">3</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/4"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-four\">\n  <div class=\"corner top\"><span class=\"number\">4</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">4</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/5"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-five\">\n  <div class=\"corner top\"><span class=\"number\">5</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_center symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">5</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/6"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-six\">\n  <div class=\"corner top\"><span class=\"number\">6</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_left symbol\"></span><span class=\"suit middle_right symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">6</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/7"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-seven\">\n  <div class=\"corner top\"><span class=\"number\">7</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_left symbol\"></span><span class=\"suit middle_top symbol\"></span><span class=\"suit middle_right symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">7</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/8"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-eight\">\n  <div class=\"corner top\"><span class=\"number\">8</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_left symbol\"></span><span class=\"suit middle_top symbol\"></span><span class=\"suit middle_right symbol\"></span><span class=\"suit middle_bottom symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">8</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/9"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-nine\">\n  <div class=\"corner top\"><span class=\"number\">9</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_top_left symbol\"></span><span class=\"suit middle_center symbol\"></span><span class=\"suit middle_top_right symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span><span class=\"suit middle_bottom_left symbol\"></span><span class=\"suit middle_bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">9</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/a"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-ace\">\n  <div class=\"corner top\"><span class=\"number\">A</span><span class=\"symbol\"></span></div><span class=\"suit middle_center symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">A</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/j"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-jack\">\n  <div class=\"corner top\"><span class=\"number\">J</span><span class=\"symbol\"></span></div><span class=\"face middle_center\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">J</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/k"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-king\">\n  <div class=\"corner top\"><span class=\"number\">K</span><span class=\"symbol\"></span></div><span class=\"face middle_center\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">K</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/q"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-queen\">\n  <div class=\"corner top\"><span class=\"number\">Q</span><span class=\"symbol\"></span></div><span class=\"face middle_center\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">Q</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/t"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-ten\">\n  <div class=\"corner top\"><span class=\"number\">10</span><span class=\"symbol\"></span></div><span class=\"suit top_left symbol\"></span><span class=\"suit top_right symbol\"></span><span class=\"suit middle_top_left symbol\"></span><span class=\"suit middle_top_center symbol\"></span><span class=\"suit middle_top_right symbol\"></span><span class=\"suit bottom_left symbol\"></span><span class=\"suit bottom_right symbol\"></span><span class=\"suit middle_bottom_center symbol\"></span><span class=\"suit middle_bottom_left symbol\"></span><span class=\"suit middle_bottom_right symbol\"></span>\n  <div class=\"corner bottom\"><span class=\"number\">10</span><span class=\"symbol\"></span></div>\n</div>\n");
  
});

Ember.TEMPLATES["cards/unknown"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"card-back\"><span class=\"middle_center\"></span></div>\n");
  
});

Ember.TEMPLATES["dubious-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Subtract one point for dubious card combinations: KQ, KJ, QJ, Qx, Jx, K, Q, and J\n");
  
});

Ember.TEMPLATES["hand"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'cardBinding': depth0};
  hashTypes = {'cardBinding': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "card-view", {hash:{
    'cardBinding': ("card")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" title=\"Honor Card Points\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "hcp-description", options) : helperMissing.call(depth0, "partial", "hcp-description", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "adjust3-description", options) : helperMissing.call(depth0, "partial", "adjust3-description", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "dubious-description", options) : helperMissing.call(depth0, "partial", "dubious-description", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "quality-description", options) : helperMissing.call(depth0, "partial", "quality-description", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "long-description", options) : helperMissing.call(depth0, "partial", "long-description", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"hand col-md-6\">\n    <div class=\"cards\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "card", "in", "model.cards", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Starter points: <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.starter", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong></div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.hcp", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          HCP\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.adjust3", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Adjust-3\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dubious", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Dubious card combinations\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.qualitySuit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Quality suits\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.longSuit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Long suits\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      </ul>\n      <div class=\"panel-footer\"><small>Hover or press \"info\" button to see description</small></div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row next-hand\">\n  <div class=\"col-md-12\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\">Next hand</a>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["hcp-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add up your HCP in the traditional way - Ace: 4, King: 3, Queen: 2 and Jack: 1\n");
  
});

Ember.TEMPLATES["long-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add one point for long suits: 1 for 5-cards, 2 for 6-cards, 3 for 7-cards, etc.\n");
  
});

Ember.TEMPLATES["quality-description"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add one point for a suit with 4+ cards and 3+ of the top 5 honors (AKQJ10)\n");
  
});