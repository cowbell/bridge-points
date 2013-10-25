Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Starter points");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Dummy points");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Bridge Points</a>\n    </div>\n  </div>\n</nav>\n\n<ul class=\"nav nav-tabs\">\n  <li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isStarterRoute:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  <li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isDummyRoute:active")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "dummy-index", options) : helperMissing.call(depth0, "link-to", "dummy-index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n</ul>\n\n<div class=\"content\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["bid"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.level", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "view.symbol", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
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

Ember.TEMPLATES["description/adjust3"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<ol>\n  <li>Count your underrated honors: number of Aces and Tens</li>\n  <li>Count your overrated honors: number of Jacks and Queens (Kings are excluded)</li>\n  <li>Subtract the smaller from the larger</li>\n  <li>Consider the difference: If the value is 0-2, no adjustment is required. If the value is 3-5 adjust by 1. If the value is 6+ (rare), adjust by 2</li>\n  <li> If you have more underrated honors your adjustment is positive add 0, 1 or 2 points. If the overrated honors are more, you adjust by subtracting the difference (0, 1, or 2)</li>\n</ol>\n");
  
});

Ember.TEMPLATES["description/dubious"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Subtract one point for dubious card combinations: KQ, KJ, QJ, Qx, Jx, K, Q, and J\n");
  
});

Ember.TEMPLATES["description/hcp"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add up your HCP in the traditional way - Ace: 4, King: 3, Queen: 2 and Jack: 1\n");
  
});

Ember.TEMPLATES["description/long"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add one point for long suits: 1 for 5-cards, 2 for 6-cards, 3 for 7-cards, etc.\n");
  
});

Ember.TEMPLATES["description/quality"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Add one point for a suit with 4+ cards and 3+ of the top 5 honors (AKQJ10)\n");
  
});

Ember.TEMPLATES["description/short"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("When you raise partner's major and that suit becomes trump (you have a fit), you will be the dummy.\nIf you have a short suit (or two), here is the correct way to add points:\n\n<ul>\n  <li>Doubleton - 1 point for each one</li>\n  <li>Singleton - 2 points, but 3 points with 4+ trumps</li>\n  <li>Void - # trumps in dummy hand</li>\n</ul>\n\nNumber of total points cannot be bigger than number of trump cards.\n");
  
});

Ember.TEMPLATES["description/starter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Count your starter points:\n\n<ul>\n  <li>HCP in traditional way</li>\n  <li>Adjust-3</li>\n  <li>Dubious doubletons and singletons</li>\n  <li>Quality suits</li>\n  <li>Length points</li>\n</ul>\n");
  
});

Ember.TEMPLATES["dummy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'card': depth0};
  hashTypes = {'card': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "card-view", {hash:{
    'card': ("card")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/starter", options) : helperMissing.call(depth0, "partial", "description/starter", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/short", options) : helperMissing.call(depth0, "partial", "description/short", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Next hand");
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"hand col-md-6\">\n    <div class=\"auction\">\n      <h3>Your partner opened auction: <strong>");
  hashContexts = {'content': depth0};
  hashTypes = {'content': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "bid-view", {hash:{
    'content': ("model.bid")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong></h3>\n    </div>\n\n    <div class=\"cards\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "card", "in", "model.hand.cards", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Dummy points: <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.dummy", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong></div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.hand.starter", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Starter points\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.shortSuits", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n          Short suits\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.view.call(depth0, "popover-view", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      </ul>\n      <div class=\"panel-footer\"><small>Hover or press \"info\" button to see description</small></div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row next-hand\">\n  <div class=\"col-md-12\">\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-primary btn-lg")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "dummy-index", options) : helperMissing.call(depth0, "link-to", "dummy-index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["starter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n        ");
  hashContexts = {'card': depth0};
  hashTypes = {'card': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "card-view", {hash:{
    'card': ("card")
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
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/hcp", options) : helperMissing.call(depth0, "partial", "description/hcp", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/adjust3", options) : helperMissing.call(depth0, "partial", "description/adjust3", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/dubious", options) : helperMissing.call(depth0, "partial", "description/dubious", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/quality", options) : helperMissing.call(depth0, "partial", "description/quality", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n            <button class=\"btn btn-xs\" data-trigger=\"hover\" data-html=\"data-html\" data-content=\"");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "description/long", options) : helperMissing.call(depth0, "partial", "description/long", options))));
  data.buffer.push("\">info</button>\n          ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Next hand");
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
  data.buffer.push("\n        </li>\n      </ul>\n      <div class=\"panel-footer\"><small>Hover or press \"info\" button to see description</small></div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row next-hand\">\n  <div class=\"col-md-12\">\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-primary btn-lg")
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});