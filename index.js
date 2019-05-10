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

let nodeAt = (node, linkedList, collection) => {
  let head = headNode(linkedList, collection);
  for (let i = 0; i < node; i++) {
    head = next(head);
  }
  return head
}

let addressAt = (head, address) => {

}
