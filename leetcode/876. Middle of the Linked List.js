/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//approach: Fast & Slow Pointer
//it is a linked list problem

//trick to find middle of linked list is:
//iteration logic should be -> (!fast && !fast.next)
//we move fast 2x speed
//we move slow 1x speed
//by the time loop ends slow will always be in the middle of the linked list

//we move fast one step ahead of slow
//we move slow one step at a time
//with the trick, 
//we can return slow
var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};