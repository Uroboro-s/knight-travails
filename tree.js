import Node from "./node.js";

//calculates the shortest path for knight
//returns the destination node which has predecessor node property that
//is used to calculate path and number of moves
function shortestPath(root, end, queue, arr = []) {
    //to check for win condition
    if(root.data[0] == end[0] && root.data[1] == end[1]) {
        return root;
    }

    //to check for already visited coordinates
    for (let index = 0; index < arr.length; index++) {
        if(arr[index][0] == root.data[0] && arr[index][1] == root.data[1]) {
            return;
        }
    }
  
    arr.push(root.data);

    let possible_children = possibleChildren(root.data, root);
    root.children = possible_children;
    
    //children nodes are enqueued in 'queue'
    for (let index = 0; index < root.children.length; index++) {
        queue.push(root.children[index]);
    }

    let endNode;
    //calls the shortestPath() function on queue elements iteratively
    //until queue is empty
    while(queue.length) {
        endNode = shortestPath(queue[0], end, queue, arr, root);
        console.log(endNode);
        if(endNode !== undefined)
            if(endNode.data[0] == end[0] && endNode.data[1] == end[1])
                queue = [];
        queue.shift();//updates the queue by removing the first element in queue 
    }

    return endNode;
}

//checks if all added coordinates are possible or not  
// and returns the possible array
function possibleChildren(coordinates, predecessor) {
    let arr = [];
        checkBounds([coordinates[0] + 1, coordinates[1] + 2], arr, predecessor);
        checkBounds([coordinates[0] + 1, coordinates[1] - 2], arr, predecessor);
        checkBounds([coordinates[0] - 1, coordinates[1] + 2], arr, predecessor);
        checkBounds([coordinates[0] - 1, coordinates[1] - 2], arr, predecessor);
        checkBounds([coordinates[0] + 2, coordinates[1] + 1], arr, predecessor);
        checkBounds([coordinates[0] + 2, coordinates[1] - 1], arr, predecessor);
        checkBounds([coordinates[0] - 2, coordinates[1] + 1], arr, predecessor);
        checkBounds([coordinates[0] - 2, coordinates[1] - 1], arr, predecessor);
    console.log(arr);
    
    return arr;
}

//checks for invalid moves made by knight
function checkBounds(coordinates, arr, predecessor)
{
    if(coordinates[0] > 8  || coordinates[1] > 8)
        return ;
    if(coordinates[0] < 1 || coordinates[1] < 1)  
        return ;

    const newChild = new Node(coordinates, predecessor);
    arr.push(newChild);
    return arr;
}

//intermmediate function that calls for creation of starting node
//and calls the shortestPath() function
function knightMoves(start, end) {
    const root = new Node(start, undefined);

    let destNode;
    destNode = shortestPath(root, end, [],)
    
    return destNode;
}

    
export default knightMoves;