  var Template = function(templateString) {
    this.template = templateString;
  };
  Template.prototype.render = function(value) {
    return this.template.replace(/##/g, value);
  };

  var levelTemplate = new Template("<ul id='level-##'></ul>");
  var childTemplate = new Template("<li id='item-##'><a href='#'>##</a></li>");