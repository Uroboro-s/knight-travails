import Node from "./node.js";


    /* constructor(start, end) {
        this.root = this.buildTree(start, [], end);
    } */

    //wrong approach since first buildtree() call will always be executed
    //bfs is to be used for traversing 
    // but exact bfs also cant be used
    function buildTree(coordinates, arr = [], end) {
        if(coordinates == end) return ;
        if(coordinates[0] > 8  || coordinates[1] > 8)
            return null;
        if(coordinates[0] < 1 || coordinates[1] < 1)  
            return null;

        arr.push(coordinates);
        
        console.log(coordinates);
        const root = new Node(coordinates);

        let cor_arr = this.checkBounds(coordinates);

        this.buildTree([coordinates[0] + 1, coordinates[1] + 2], arr, end);
        this.buildTree([coordinates[0] + 1, coordinates[1] - 2], arr, end);
        this.buildTree([coordinates[0] - 1, coordinates[1] + 2], arr, end);
        this.buildTree([coordinates[0] - 1, coordinates[1] - 2], arr, end);
        this.buildTree([coordinates[0] + 2, coordinates[1] + 1], arr, end);
        this.buildTree([coordinates[0] + 2, coordinates[1] - 1], arr, end);
        this.buildTree([coordinates[0] - 2, coordinates[1] + 1], arr, end);
        this.buildTree([coordinates[0] - 2, coordinates[1] - 1], arr, end);

        root.children.forEach(element => {
            console.log("1");
        });

        return root;
    }
 /*    trialFunction() {
        arr=[]
        queue =[]
        root(node)
    } */

/* levelOrder(arr = [], queue = [], root = this.root) {
      if (root === null) return;
      // Visit the root
      arr.push(root.data);

      // Traverse to left and right children -> add to queue
      queue.push(root.left);
      queue.push(root.right);

      // Move to next level
      while (queue.length) {
        const level = queue[0];
        queue.shift();
        this.levelOrder(arr, queue, level)
      }

      return arr;
    }*/
function levelOrder(root, end, queue, arr = [], predecessor) {
    if(root.data[0] == end[0] && root.data[1] == end[1]){

        console.log("found");
        console.log(root);
        console.log(queue);
        return root;
    }
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        console.log("huh");
        if(arr[index][0] == root.data[0] && arr[index][1] == root.data[1]) {
            console.log("ha");
            return;
        }
    }

    
   arr.push(root.data);
  


    
    console.log(root);
    let possible_children = checkBounds(root.data, root);
    root.children = possible_children;
    console.log(possible_children);
    //checks if added coordinates are successful and reutrns 
    //the possible array
    for (let index = 0; index < root.children.length; index++) {
        queue.push(root.children[index]);
    }
    console.log(queue);
    let endNode;
    while(queue.length) {
        endNode = levelOrder(queue[0], end, queue, arr, root);
        console.log(endNode);
        if(endNode !== undefined)
            if(endNode.data[0] == end[0] && endNode.data[1] == end[1])
                queue = [];
        console.log(queue);
        queue.shift();
    }
    console.log("hier");

    return endNode;
}
let count = 0;
function checkBounds(coordinates, predecessor) {
    /* if(count == 10)
    {
        console.log("count reached = " + count);
        return;
    } */
    let arr = [];
    count++;
        uildTree([coordinates[0] + 1, coordinates[1] + 2], arr, predecessor);
        uildTree([coordinates[0] + 1, coordinates[1] - 2], arr, predecessor);
        uildTree([coordinates[0] - 1, coordinates[1] + 2], arr, predecessor);
        uildTree([coordinates[0] - 1, coordinates[1] - 2], arr, predecessor);
        uildTree([coordinates[0] + 2, coordinates[1] + 1], arr, predecessor);
        uildTree([coordinates[0] + 2, coordinates[1] - 1], arr, predecessor);
        uildTree([coordinates[0] - 2, coordinates[1] + 1], arr, predecessor);
        uildTree([coordinates[0] - 2, coordinates[1] - 1], arr, predecessor);
    console.log(arr);
    
    return arr;
}
function uildTree(coordinates, arr, predecessor)
{
    /* console.log(coordinates);
    console.log(arr); */

    if(coordinates[0] > 8  || coordinates[1] > 8)
        return ;
    if(coordinates[0] < 1 || coordinates[1] < 1)  
        return ;

    const newChild = new Node(coordinates, predecessor)
    console.log(newChild);
    arr.push(newChild);
    return arr;
}

function intermmediateFunction(start, end) {
    const root = new Node(start, undefined);

    console.log(root);
    let destNode;
    destNode = levelOrder(root, end, [],)
    console.log(destNode);
    
}
    


export  default intermmediateFunction;