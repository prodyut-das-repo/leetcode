/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-Infinity);
    let head = dummy;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
    if (l1) dummy.next = l1;
    else dummy.next = l2;
    return head.next;
  };
  