let getName = (node) => {
  return node['name']
}

let headNode = (linkedList, collection) => {
  return collection[linkedList]
}

let next = node => {
  let nextAddress = node[1]
  return collection[nextAddress]
}

let nodeAt = (head, address) => {
  let node = head;
  for (i = 0; i < address; i++) {
    node = next(node);
  }
}

let addressAt = (head, address) => {
  
}
