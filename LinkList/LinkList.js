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
   addHead(data){
       let newNode = new Node(data);
       newNode.next = this.head
       this.head = newNode;
   }

addLast(data){
    let newNode = new Node(data);
    if(!this.head)
    {
        this.head = newNode;
        return;
    }
    let current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = newNode;
}
addAtIndex(index, data){
if(index <0 || index > size)
{
    console.log("invalid index");
    return;
}
let newNode = new Node(data);
if(index === 0)
{
    newNode.next =  this.head
    this.head = newNode;
}
let current = this.head
for(let i = 0; i < index - 1; i++){
 current = current.next;
}
newNode.next = current.next
current.next = newNode;
}
removeTop(data){
    if(!this.head){
        return
    }
    this.head = this.head.next
}
removeLast(data){
    if(!this.head)
    {
                return;
    }
    let current = this.head;
    while(current.next.next){
        current = current.next;
    }
    current.next = null;

}

removeATSpecificIndex(index){
    if(index <0 )
    {
        console.log("invalid index");
        return;
    }
    let newNode = new Node(data);
    if(index === 0)
    {
        this.head = this.head.next;;
    }
    for(let i = 0; i < index - 1; i++){
     current = current.next;
    }
   if(current.next)
   {
    current.next = current.next.next;
   }
    
}
print(){
    let  current = this.head
{
    while(current){
        console.log(current.data)
        current = current.next;
    }
}
}
size(){
    let count = 0;
    let current = this.head
    while(current.next){
    count ++;
    current = current.next;
    }
    return count
}

 }
 const Linkedlist = new LinkList()
 Linkedlist.addHead(1)
 Linkedlist.addHead(2)
 Linkedlist.addHead(3)
 Linkedlist.addLast(9)
 Linkedlist.removeATSpecificIndex(2)
 Linkedlist.print()
//  console.log(Linkedlist.size());