import printPath from "./display.js";
import knightMoves from "./tree.js";

console.log("hello");
let start_coordinates = [1,1];
let end_coordinates = [1, 8];

let destNode = knightMoves(start_coordinates, end_coordinates);
console.log(destNode);
let array = printPath(destNode);
console.log(array);
let message = "You made it in " + (array.length - 1) +" moves! Here's your path:";
console.log(message);
for (let index = 0; index < array.length; index++) {
    console.log(array[index].data);
    message = message + "\n" + (array[index].data);   
}
console.log(message);
