  var putInTree = function(where, list, level) {
    var what = list.map(function(i) {return i.label;}); 
    var lvl = $(levelTemplate.render(level)).appendTo(where);
    
    list.forEach(function(item){
      var li = $(childTemplate.render(item.label)).appendTo(lvl);
      if(item.children && item.children.length > 0) {
        putInTree(li, item.children, level + 1);
      }
    });
  };