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
