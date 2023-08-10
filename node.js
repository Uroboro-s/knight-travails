class Node {
    constructor(data, predecessor) {
        this.data = data;
        this.children = [];
        this.predecessor = predecessor;
    }
}

export default Node;