function reverseLinkList(head) {
  const newLinkList = new Node(0)
  const Val = []
  Val.push(head.val)
  while (head.next) {
    Val.push(head.next.val)
  }
  Val.reverse()
  const currentLinkNode = newLinkList
  for (let i = 0; i < Val.length; i++) {
    const node = new Node(Val[i])
    currentLinkNode.next = node
    currentLinkNode = node
  }
  return newLinkList.next
}


function reverseLinkList(head) {
  while (head.next) {
    head.next.prev = head
  }
}
