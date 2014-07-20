/* global $ */

$(document).ready(function() {
  
  var data = [{
      id: 1,
      label: "1",
      children: [{
        id: 2,
        label: "1.1",
        children: []
      }, {
        id: 3,
        label: "1.2",
        children: [{
          id: 4,
          label: "1.2.1"
        }]
      }]
    },
    {
      id: 5,
      label: "2",
      children: [
        {
        id: 6,
        label: "2.1"
      }
      ]
    }

  ];

  putInTree($("#tree"), data, 1);

});