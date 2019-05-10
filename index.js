let getName = (node) => {
  return node['name']
}

let headNode = (linkedList, collection) => {
  return collection[linkedList]
}

let next = (node, collection) => {
  let nextAddress = node['next']
  return collection[nextAddress]
}

let nodeAt = (head, linkedList, collection) => {
  let node = headnode(linkedList, collection);
  for (let i = 0; i < head; i++) {
    node = next(node);
  }
  return node
}

let addressAt = (head, address) => {

}
