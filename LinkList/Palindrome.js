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
var isPalindrome = function(head) {
    let string1 =''
    let string2 =''
    let current = head;
    while(current!=null){
        string1 = `${string1}${current.data}`
        string2 = `${current.data}${string2}`
        current = current.next
    }
   return string1 === string2
};

console.log(isPalindrome([1,2,2,4]))
