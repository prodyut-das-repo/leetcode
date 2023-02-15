/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if(!head || !head.next) return null;
    let fast = head;
    let slow = head;
    let pointer = head;
    let index = 0;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    if(fast !== slow) return null;
    while(pointer !== slow){
        pointer = pointer.next;
        slow = slow.next;
        index++;
    }
    return slow;
};
