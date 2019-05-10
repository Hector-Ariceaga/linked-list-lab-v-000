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

let nodeAt = (head, index) => {
  let node = head;
  for (let i = 0; i < index; i++) {
    node = next(node);
  }
  return node
}

let addressAt = (head, address) => {

}
