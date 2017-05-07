// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {

  var result = [];
  var selectedNode = node || document.body;
  var selectedNodeChildren = selectedNode.childNodes;

//if the node or document body has class names listed, and the className parameter is found within them, push the element matching the className to result
  if (selectedNode.classList && selectedNode.classList.contains(className)) {
    result.push(selectedNode);
  }
//if the element matching the className has child nodes, execute getElementsByClassName on all of them until it runs out of child nodes
  if (selectedNodeChildren) {
    selectedNodeChildren.forEach(function(selectedNodeChild) {
      result = result.concat(getElementsByClassName(className, selectedNodeChild));
    })
  }
  return result;
};
