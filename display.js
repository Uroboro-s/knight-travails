
//to log the number of moves taken by knight to reach destination
//and display the shortest path
function printPath(endNode, array = []) {
    array.unshift(endNode);
    if(endNode.predecessor)
        printPath(endNode.predecessor, array);

    return array;
}

export default printPath;