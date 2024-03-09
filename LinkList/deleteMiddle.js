class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkList{
    constructor(){
        this.head = null;
    }
    }
    
var deleteMiddle = function(head) {
    if(head === null || head.next === null) return null;
    let slow= head;
    let fast = head;
            fast = fast.next.next;

    while(fast !== null && fast.next !== null)
    {
        slow= slow.next;
        fast = fast.next.next;
    }
    let middle = slow.next;
    slow.next = slow.next.next;
    delete(middle)
   return head;  
};
console.log(deleteMiddle([1,3,4,7,1,2,6]));