var data = 
    [
      {
    "nodeId": 1,
    "nodeName": "grand parent",
    "childNodes": 
        [{
        "nodeId": 2,
        "nodeName": "parent1",
        "childNodes": 
          [{
              "nodeId": 4,
               "nodeName": "parent2",
                 }, 
           { "nodeId": 5,
               "nodeName": "parent3",} ]
          },
        {
        "nodeId": 3,
        "nodeName": "parent4",
        "childNodes": 
          [{
              "nodeId": 6,
               "nodeName": "parent5",
                 }, 
           { "nodeId": 7,
               "nodeName": "parent6",} ]
        
      } 
    ]


function sumNodes(nodeList) {
    var sumChildren = function(node) {
        var sum = 0;
        for (var i = 0; i < node.childNodes.length && node.childNodes != null; i++) {
            sum += sumChildren(node.childNodes[i]);
        }
        node.sum = sum;
        return node.count == undefined ? sum : node.count;
    }
    for(var i=0; i<nodeList.length; i++){
		sumChildren(nodeList[i]);
	}

	return nodeList;
}

